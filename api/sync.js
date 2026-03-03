const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      // Pull all data from the database
      const rows = await sql`SELECT key, value, updated_at FROM fitlife.app_data`;
      const data = {};
      for (const row of rows) {
        data[row.key] = {
          value: row.value,
          updated_at: row.updated_at
        };
      }
      return res.status(200).json({ ok: true, data });
    }

    if (req.method === 'POST') {
      const { items } = req.body;

      if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ ok: false, error: 'Missing items array' });
      }

      const updated = [];

      for (const item of items) {
        const { key, value, updated_at } = item;

        if (!key || updated_at === undefined) {
          continue;
        }

        const jsonValue = JSON.stringify(value);
        const ts = new Date(updated_at);

        // Upsert with last-write-wins: only update if incoming timestamp is newer
        const result = await sql`
          INSERT INTO fitlife.app_data (key, value, updated_at)
          VALUES (${key}, ${jsonValue}::jsonb, ${ts})
          ON CONFLICT (key) DO UPDATE
          SET value = ${jsonValue}::jsonb, updated_at = ${ts}
          WHERE fitlife.app_data.updated_at <= ${ts}
          RETURNING key
        `;

        if (result.length > 0) {
          updated.push(key);
        }
      }

      return res.status(200).json({ ok: true, updated });
    }

    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  } catch (err) {
    console.error('Sync error:', err);
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }
};
