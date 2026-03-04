// ===== FitLife Health App =====
// All data stored in localStorage for persistence

// ===== Exercise Emoji Icons =====
// (SVG illustrations removed per user request)
const exerciseIcons = {
  wallPushup: '\u{1F9CE}',
  shoulderPress: '\u{1F4AA}',
  bicepCurl: '\u{1F4AA}',
  bentOverRow: '\u{1F3CB}',
  squat: '\u{1F9D1}',
  lunge: '\u{1F6B6}',
  gluteBridge: '\u{1F9D8}',
  calfRaise: '\u{1F9B6}',
  plank: '\u{1F6B5}',
  tricepDip: '\u{1F4AA}',
  lateralRaise: '\u{1F64C}',
  floorPress: '\u{1F4AA}',
  deadlift: '\u{1F3CB}',
  generic: '\u{1F3AF}'
};

// ===== Exercise Database =====
const exercises = {
  // -- Upper Body --
  wallPushup: {
    id: 'wallPushup', name: 'Wall Push-Up', muscles: ['Chest', 'Shoulders', 'Triceps'],
    equipment: 'Bodyweight', svg: 'wallPushup',
    instructions: [
      'Stand about 2 feet from a wall with feet shoulder-width apart.',
      'Place your palms flat on the wall at shoulder height and shoulder-width apart.',
      'Slowly bend your elbows, bringing your chest toward the wall. Keep your body in a straight line.',
      'Pause when your face is close to the wall.',
      'Push back to the starting position by straightening your arms.',
      'Keep your core tight throughout the movement.'
    ],
    tips: ['Keep your body straight — don\'t let your hips sag', 'Move to a lower surface (counter, then floor) as you get stronger', 'Great for building chest strength without straining joints', 'Breathe in as you lower, breathe out as you push away']
  },
  shoulderPress: {
    id: 'shoulderPress', name: 'Dumbbell Shoulder Press', muscles: ['Shoulders', 'Triceps'],
    equipment: 'Dumbbells', svg: 'shoulderPress',
    instructions: [
      'Sit or stand with feet hip-width apart, holding a dumbbell in each hand.',
      'Bring the dumbbells to shoulder height with palms facing forward. Elbows should be at about 90 degrees.',
      'Press the dumbbells straight up overhead until your arms are nearly straight (don\'t lock elbows).',
      'Slowly lower back down to shoulder height.',
      'That\'s one rep — keep the movement controlled.'
    ],
    tips: ['Start with light weights (3-5 lbs) to learn the movement', 'Sitting on a chair provides more back support', 'Don\'t arch your lower back — keep core engaged', 'If you feel neck strain, try a lighter weight']
  },
  bicepCurl: {
    id: 'bicepCurl', name: 'Dumbbell Bicep Curl', muscles: ['Biceps', 'Forearms'],
    equipment: 'Dumbbells', svg: 'bicepCurl',
    instructions: [
      'Stand with feet hip-width apart, holding a dumbbell in each hand at your sides.',
      'Keep your palms facing forward (underhand grip).',
      'Keeping your upper arms still, bend your elbows to curl the weights up toward your shoulders.',
      'Squeeze your biceps at the top for a moment.',
      'Slowly lower the weights back to the starting position.',
      'Keep your elbows close to your body throughout.'
    ],
    tips: ['Don\'t swing the weights — use controlled movement', 'If you sway, the weight is too heavy', 'You can alternate arms if that feels more comfortable', 'Keep your wrists straight, don\'t curl them']
  },
  bentOverRow: {
    id: 'bentOverRow', name: 'Dumbbell Bent-Over Row', muscles: ['Back', 'Biceps', 'Shoulders'],
    equipment: 'Dumbbells', svg: 'bentOverRow',
    instructions: [
      'Stand with feet hip-width apart, holding a dumbbell in each hand.',
      'Bend forward at the hips about 45 degrees, keeping your back flat. Bend knees slightly.',
      'Let the dumbbells hang straight down from your shoulders, palms facing each other.',
      'Pull the dumbbells up toward your ribcage, squeezing your shoulder blades together.',
      'Slowly lower back to the hanging position.',
      'Keep your back flat — imagine balancing a book on it.'
    ],
    tips: ['This is excellent for posture improvement', 'Keep your neck in line with your spine — look at the floor a few feet ahead', 'Squeeze your shoulder blades at the top of each rep', 'If your lower back hurts, don\'t bend as far forward']
  },
  tricepDip: {
    id: 'tricepDip', name: 'Chair Tricep Dip', muscles: ['Triceps', 'Shoulders', 'Chest'],
    equipment: 'Chair/Bench', svg: 'tricepDip',
    instructions: [
      'Sit on the edge of a sturdy chair with your hands gripping the edge, fingers pointing forward.',
      'Slide your bottom off the chair, supporting yourself with your arms. Feet flat on the floor, knees bent.',
      'Slowly bend your elbows to lower your body down. Go only as far as comfortable (aim for 90-degree elbow bend).',
      'Push back up by straightening your arms.',
      'Keep your back close to the chair throughout.'
    ],
    tips: ['Make sure the chair is against a wall so it doesn\'t slide!', 'Don\'t go too deep — protect your shoulders', 'Keep feet closer to you for easier, further away for harder', 'This is great for toning the back of your arms']
  },
  lateralRaise: {
    id: 'lateralRaise', name: 'Dumbbell Lateral Raise', muscles: ['Shoulders'],
    equipment: 'Dumbbells', svg: 'lateralRaise',
    instructions: [
      'Stand with feet hip-width apart, holding light dumbbells at your sides.',
      'With a slight bend in your elbows, raise both arms out to the sides.',
      'Lift until your arms are parallel with the floor (like a "T" shape).',
      'Pause briefly at the top.',
      'Slowly lower back to your sides.'
    ],
    tips: ['Use light weights for this one — 3-5 lbs is plenty to start', 'Lead with your elbows, not your hands', 'Don\'t shrug your shoulders up to your ears', 'Imagine pouring a pitcher of water at the top of the movement']
  },
  hammerCurl: {
    id: 'hammerCurl', name: 'Dumbbell Hammer Curl', muscles: ['Biceps', 'Forearms'],
    equipment: 'Dumbbells', svg: 'bicepCurl',
    instructions: [
      'Stand with feet hip-width apart, holding a dumbbell in each hand at your sides.',
      'Keep your palms facing your body (thumbs pointing forward) — like holding hammers.',
      'Curl the dumbbells up toward your shoulders, keeping palms facing inward the entire time.',
      'Squeeze at the top, then slowly lower back down.'
    ],
    tips: ['Palms face inward the entire time — that\'s what makes it a "hammer" curl', 'This works a slightly different part of your arm than regular curls', 'Great for building forearm strength too', 'Keep upper arms still — only your forearms should move']
  },
  tricepKickback: {
    id: 'tricepKickback', name: 'Dumbbell Tricep Kickback', muscles: ['Triceps'],
    equipment: 'Dumbbells', svg: 'bentOverRow',
    instructions: [
      'Hold a dumbbell in your right hand. Place your left hand and left knee on a chair for support.',
      'Bend forward so your torso is nearly parallel to the floor.',
      'Bring your right upper arm alongside your body, elbow bent at 90 degrees.',
      'Keeping your upper arm still, straighten your arm back behind you.',
      'Squeeze your tricep at full extension, then slowly bend back to 90 degrees.',
      'Complete all reps, then switch sides.'
    ],
    tips: ['Keep your upper arm glued to your side — only your forearm moves', 'Use a light weight and focus on squeezing at the top', 'Don\'t swing — slow and controlled wins', 'Great exercise for toning the back of the arm']
  },
  // -- Lower Body --
  bodyweightSquat: {
    id: 'bodyweightSquat', name: 'Bodyweight Squat', muscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
    equipment: 'Bodyweight', svg: 'squat',
    instructions: [
      'Stand with feet slightly wider than shoulder-width apart, toes pointed slightly outward.',
      'Hold your arms out in front for balance, or clasp hands at your chest.',
      'Push your hips back and bend your knees, as if sitting into an invisible chair.',
      'Lower until your thighs are roughly parallel to the floor (or as far as comfortable).',
      'Push through your heels to stand back up.',
      'Keep your chest up and back straight throughout.'
    ],
    tips: ['Your knees should track over your toes, not cave inward', 'If you can\'t go very deep at first, that\'s okay — work on range of motion gradually', 'Push through your heels, not your toes', 'This is the king of lower body exercises!']
  },
  dumbbellLunge: {
    id: 'dumbbellLunge', name: 'Dumbbell Lunge', muscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
    equipment: 'Dumbbells', svg: 'lunge',
    instructions: [
      'Stand tall holding a dumbbell in each hand at your sides.',
      'Step forward about 2-3 feet with your right foot.',
      'Lower your body by bending both knees to about 90 degrees. Your back knee should hover just above the floor.',
      'Push through your front heel to return to the starting position.',
      'Repeat on the other leg. That\'s one rep per side.'
    ],
    tips: ['Keep your front knee directly over your ankle — don\'t let it push past your toes', 'Take a big enough step that your front shin stays vertical', 'Hold onto a wall if you need balance help at first', 'Stationary lunges (not walking) are easier on balance']
  },
  gluteBridge: {
    id: 'gluteBridge', name: 'Glute Bridge', muscles: ['Glutes', 'Hamstrings', 'Core'],
    equipment: 'Bodyweight', svg: 'gluteBridge',
    instructions: [
      'Lie on your back on a mat with knees bent and feet flat on the floor, hip-width apart.',
      'Place your arms at your sides with palms down.',
      'Press through your heels to lift your hips off the floor until your body forms a straight line from shoulders to knees.',
      'Squeeze your glutes hard at the top and hold for 2 seconds.',
      'Slowly lower your hips back down.',
      'That\'s one rep.'
    ],
    tips: ['Don\'t arch your back at the top — think "straight line"', 'Really squeeze your glutes — that\'s the target muscle', 'Keep your feet close enough that you can touch your heels with your fingertips', 'This is amazing for glute activation and lower back health']
  },
  calfRaise: {
    id: 'calfRaise', name: 'Calf Raise', muscles: ['Calves'],
    equipment: 'Bodyweight', svg: 'calfRaise',
    instructions: [
      'Stand with feet hip-width apart. You can hold onto a wall or chair for balance.',
      'Rise up onto the balls of your feet, lifting your heels as high as possible.',
      'Hold at the top for 1-2 seconds, feeling the squeeze in your calves.',
      'Slowly lower back down.',
      'For added challenge, hold dumbbells at your sides.'
    ],
    tips: ['Go slowly — 2 seconds up, 2 seconds down', 'Stand on a step with heels hanging off for a deeper stretch', 'Strong calves help with balance and walking', 'You can hold dumbbells for added resistance']
  },
  romanianDeadlift: {
    id: 'romanianDeadlift', name: 'Dumbbell Romanian Deadlift', muscles: ['Hamstrings', 'Glutes', 'Lower Back'],
    equipment: 'Dumbbells', svg: 'deadlift',
    instructions: [
      'Stand with feet hip-width apart, holding dumbbells in front of your thighs.',
      'With a very slight bend in your knees, slowly hinge forward at the hips.',
      'Lower the dumbbells along your legs. You should feel a stretch in your hamstrings.',
      'Go down until the dumbbells reach about mid-shin level (or wherever you feel a good stretch).',
      'Squeeze your glutes and hamstrings to return to standing.',
      'Keep the dumbbells close to your body the entire time.'
    ],
    tips: ['This is NOT a squat — keep your knees mostly straight', 'Your back should stay flat the entire time', 'Think about pushing your hips backward, not bending forward', 'Stop if you feel any sharp pain in your lower back', 'Start very light to learn the hip hinge pattern']
  },
  wallSit: {
    id: 'wallSit', name: 'Wall Sit', muscles: ['Quadriceps', 'Glutes'],
    equipment: 'Wall', svg: 'generic',
    instructions: [
      'Stand with your back flat against a wall.',
      'Slide down the wall until your thighs are parallel to the floor (or as far as comfortable).',
      'Your knees should be directly above your ankles at a 90-degree angle.',
      'Keep your back flat against the wall and hold this position.',
      'Hold for the prescribed time, then slide back up.'
    ],
    tips: ['Keep your back pressed firmly against the wall', 'If it\'s too hard, don\'t slide down as far', 'Focus on deep breathing while you hold', 'Your legs will burn — that\'s normal!']
  },
  // -- Full Body / Core --
  gobletSquat: {
    id: 'gobletSquat', name: 'Dumbbell Goblet Squat', muscles: ['Quadriceps', 'Glutes', 'Core'],
    equipment: 'Dumbbell', svg: 'squat',
    instructions: [
      'Hold one dumbbell vertically at your chest with both hands cupping the top end (like holding a goblet).',
      'Stand with feet slightly wider than shoulder-width, toes slightly out.',
      'Push your hips back and squat down, keeping the dumbbell close to your chest.',
      'Go as low as comfortable, ideally until your elbows touch your knees.',
      'Push through your heels to stand back up.'
    ],
    tips: ['The weight at your chest helps counterbalance so you can squat deeper', 'Keep your chest up and proud throughout', 'This is easier on your back than a barbell squat', 'Start with a light dumbbell (5-10 lbs)']
  },
  stepUp: {
    id: 'stepUp', name: 'Dumbbell Step-Up', muscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
    equipment: 'Dumbbells + Step', svg: 'generic',
    instructions: [
      'Stand in front of a sturdy step, bench, or bottom stair holding dumbbells at your sides.',
      'Place your right foot firmly on the step.',
      'Push through your right heel to step up onto the platform, bringing your left foot up.',
      'Step back down with your left foot first, then your right.',
      'Complete all reps on one side, then switch leading legs.'
    ],
    tips: ['Choose a step height that feels comfortable — a staircase step is a great starting height', 'Don\'t push off with your back foot — let the front leg do the work', 'Keep your torso upright', 'Hold onto a railing if you need balance support']
  },
  birdDog: {
    id: 'birdDog', name: 'Bird Dog', muscles: ['Core', 'Lower Back', 'Glutes'],
    equipment: 'Bodyweight', svg: 'generic',
    instructions: [
      'Start on your hands and knees (tabletop position). Hands under shoulders, knees under hips.',
      'Simultaneously extend your right arm forward and your left leg straight back.',
      'Hold for 2-3 seconds, keeping your hips level (don\'t rotate).',
      'Slowly return to the starting position.',
      'Repeat with left arm and right leg. That\'s one rep per side.'
    ],
    tips: ['Imagine balancing a glass of water on your lower back', 'This is one of the best exercises for core stability and back health', 'Move slowly and with control', 'Keep your neck neutral — look at the floor below you']
  },
  deadBug: {
    id: 'deadBug', name: 'Dead Bug', muscles: ['Core', 'Deep Stabilizers'],
    equipment: 'Bodyweight', svg: 'generic',
    instructions: [
      'Lie on your back with arms extended straight up toward the ceiling.',
      'Lift your legs so knees are bent at 90 degrees (shins parallel to ceiling).',
      'Press your lower back firmly into the floor — this is key!',
      'Slowly lower your right arm behind your head while extending your left leg straight out.',
      'Return to start, then repeat with left arm and right leg.',
      'Your lower back should stay pressed into the floor the entire time.'
    ],
    tips: ['If your back arches off the floor, you\'re going too far', 'This is a fantastic core exercise that\'s very gentle on the spine', 'Move slowly — the slower you go, the harder it is', 'Great for strengthening the deep core muscles']
  },
  modifiedSidePlank: {
    id: 'modifiedSidePlank', name: 'Modified Side Plank', muscles: ['Obliques', 'Core', 'Shoulders'],
    equipment: 'Bodyweight', svg: 'generic',
    instructions: [
      'Lie on your right side with your right forearm on the floor, elbow under your shoulder.',
      'Bend your knees to 90 degrees (modified version for comfort).',
      'Lift your hips off the floor so your body forms a straight line from head to knees.',
      'Hold this position for the prescribed time.',
      'Lower down, then repeat on the other side.'
    ],
    tips: ['Keep your hips stacked — don\'t let them roll forward or backward', 'If you feel wrist/elbow pain, try adjusting your position', 'Build up time gradually — even 10 seconds is a good start', 'This strengthens the sides of your core (obliques)']
  },
  chestFly: {
    id: 'chestFly', name: 'Dumbbell Floor Chest Fly', muscles: ['Chest', 'Shoulders'],
    equipment: 'Dumbbells', svg: 'floorPress',
    instructions: [
      'Lie on your back on the floor with knees bent, feet flat.',
      'Hold a dumbbell in each hand, arms extended above your chest with a slight elbow bend.',
      'Slowly open your arms out to the sides in a wide arc, lowering the dumbbells.',
      'Stop when your upper arms touch the floor (the floor limits your range to protect shoulders).',
      'Squeeze your chest to bring the dumbbells back together overhead.',
      'Imagine hugging a large tree.'
    ],
    tips: ['Keep a slight bend in your elbows throughout — don\'t straighten your arms fully', 'The floor protects your shoulders by limiting how far you go', 'Use lighter weights than you think — this exercise is harder than it looks', 'Focus on feeling the stretch and squeeze in your chest']
  },
  floorPress: {
    id: 'floorPress', name: 'Dumbbell Floor Press', muscles: ['Chest', 'Triceps', 'Shoulders'],
    equipment: 'Dumbbells', svg: 'floorPress',
    instructions: [
      'Lie on your back on the floor with knees bent, feet flat.',
      'Hold a dumbbell in each hand at chest level, elbows resting on the floor.',
      'Press the dumbbells straight up toward the ceiling until arms are extended (don\'t lock elbows).',
      'Slowly lower back down until your upper arms rest on the floor.',
      'That\'s one rep.'
    ],
    tips: ['The floor limits the range of motion, which is easier on your shoulders', 'Great alternative to bench press without needing a bench', 'Keep your lower back pressed into the floor', 'Start with 5-8 lb dumbbells']
  },
  plank: {
    id: 'plank', name: 'Forearm Plank', muscles: ['Core', 'Shoulders', 'Back'],
    equipment: 'Bodyweight', svg: 'plank',
    instructions: [
      'Start on the floor on your forearms and toes (or knees for modified version).',
      'Elbows should be directly under your shoulders.',
      'Create a straight line from your head to your heels (or knees).',
      'Engage your core by pulling your belly button toward your spine.',
      'Hold this position. Focus on breathing steadily.',
      'Don\'t let your hips sag down or pike up.'
    ],
    tips: ['Start with the modified version (on knees) if needed', 'Even 15-20 seconds is beneficial — build up over time', 'Look at the floor to keep your neck neutral', 'If you shake, that means your muscles are working!', 'This is one of the best all-around core exercises']
  }
};

// ===== Weekly Workout Schedule =====
const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const defaultWorkouts = [
  {
    name: 'Upper Body Strength', type: 'strength', badge: 'strength',
    exercises: ['wallPushup', 'shoulderPress', 'bicepCurl', 'bentOverRow', 'tricepDip', 'lateralRaise'],
    sets: [3, 3, 3, 3, 3, 3], reps: ['10 reps', '10 reps', '12 reps', '10 reps', '8 reps', '10 reps']
  },
  {
    name: 'Cardio Day', type: 'cardio', badge: 'cardio',
    description: 'Choose one: Elliptical (30 min), Treadmill walk (30 min), or Outdoor walk (30-45 min). Keep a moderate pace where you can still hold a conversation.',
    exercises: [], sets: [], reps: []
  },
  {
    name: 'Lower Body Strength', type: 'strength', badge: 'strength',
    exercises: ['bodyweightSquat', 'dumbbellLunge', 'gluteBridge', 'calfRaise', 'romanianDeadlift', 'wallSit'],
    sets: [3, 3, 3, 3, 3, 3], reps: ['12 reps', '10 each leg', '15 reps', '15 reps', '10 reps', '30 seconds']
  },
  {
    name: 'Cardio Day', type: 'cardio', badge: 'cardio',
    description: 'Choose one: Elliptical (30 min), Treadmill walk (30 min), or Outdoor walk (30-45 min). Try a different option than Tuesday to keep things interesting!',
    exercises: [], sets: [], reps: []
  },
  {
    name: 'Full Body Strength', type: 'strength', badge: 'strength',
    exercises: ['gobletSquat', 'floorPress', 'stepUp', 'bentOverRow', 'plank', 'deadBug'],
    sets: [3, 3, 3, 3, 3, 3], reps: ['10 reps', '10 reps', '8 each leg', '10 reps', '20-30 sec', '10 each side']
  },
  {
    name: 'Core & Upper Body', type: 'strength', badge: 'strength',
    exercises: ['birdDog', 'chestFly', 'deadBug', 'hammerCurl', 'modifiedSidePlank', 'tricepKickback'],
    sets: [3, 3, 3, 3, 3, 3], reps: ['10 each side', '10 reps', '10 each side', '12 reps', '15 sec each', '10 reps']
  },
  {
    name: 'Active Recovery / Light Walk', type: 'rest', badge: 'rest',
    description: 'Take a gentle 20-30 minute walk, do some light stretching, or enjoy a yoga session. Your body recovers and builds muscle on rest days!',
    exercises: [], sets: [], reps: []
  }
];

// Load schedule from localStorage or use defaults
function getSchedule() {
  const saved = getData('custom_schedule', null);
  if (saved && saved.length === 7) {
    return saved.map((w, i) => ({ ...w, day: dayNames[i] }));
  }
  return defaultWorkouts.map((w, i) => ({ ...w, day: dayNames[i] }));
}

function saveSchedule(schedule) {
  // Save without the day property (we regenerate it from index)
  const toSave = schedule.map(w => {
    const copy = { ...w };
    delete copy.day;
    return copy;
  });
  setData('custom_schedule', toSave);
}

function isCustomSchedule() {
  return getData('custom_schedule', null) !== null;
}

let weeklySchedule = getSchedule();

// ===== Swap Mode State =====
let swapMode = false;
let swapFirstIndex = -1;

// ===== Motivational Quotes =====
const quotes = [
  "The only bad workout is the one that didn't happen. You showed up — that's what counts!",
  "You don't have to be extreme, just consistent. Small steps lead to big changes.",
  "Your body can do amazing things. Trust the process and be patient with yourself.",
  "Strength doesn't come from what you can do. It comes from overcoming what you thought you couldn't.",
  "Every rep is a step closer to the stronger, healthier you. Keep going!",
  "Progress, not perfection. You're doing better than you think.",
  "You are never too old to set another goal or to dream a new dream.",
  "The best project you'll ever work on is you.",
  "Fitness is not about being better than someone else. It's about being better than you used to be.",
  "A year from now, you'll wish you had started today. But guess what — you did start!",
  "Take care of your body. It's the only place you have to live.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Don't count the days — make the days count.",
  "You're one workout away from a good mood.",
  "Strong is the new beautiful. You've got this!",
  "Age is just a number. Your determination defines you.",
  "Motivation gets you started. Habit keeps you going.",
  "You didn't come this far to only come this far.",
  "The secret of getting ahead is getting started.",
  "Be stronger than your excuses. You deserve this."
];

// ===== App State & Data Management =====
function getData(key, fallback) {
  try {
    const v = localStorage.getItem('fitlife_' + key);
    return v ? JSON.parse(v) : fallback;
  } catch { return fallback; }
}

function setData(key, val) {
  localStorage.setItem('fitlife_' + key, JSON.stringify(val));
  const now = new Date().toISOString();
  localStorage.setItem('fitlife_' + key + '_updated', now);
  syncEngine.scheduleSync(key, val, now);
}

// ===== Cloud Sync Engine =====
const syncEngine = {
  pendingTimer: null,
  pendingKeys: {},
  isSyncing: false,
  API_URL: '/api/sync',

  getToken() {
    return localStorage.getItem('fitlife_sync_token') || '';
  },

  setToken(token) {
    localStorage.setItem('fitlife_sync_token', token);
  },

  promptForToken() {
    const modal = document.getElementById('passphrase-modal');
    if (modal) modal.classList.add('active');
  },

  handleAuthError() {
    // Clear invalid token and prompt for new one
    localStorage.removeItem('fitlife_sync_token');
    this.updateStatus('locked');
    this.promptForToken();
  },

  scheduleSync(key, val, timestamp) {
    this.pendingKeys[key] = { value: val, updated_at: timestamp };
    clearTimeout(this.pendingTimer);
    this.pendingTimer = setTimeout(() => this.pushToCloud(), 1000);
  },

  async pushToCloud() {
    const token = this.getToken();
    if (!token) { this.updateStatus('locked'); return; }

    const keys = Object.keys(this.pendingKeys);
    if (keys.length === 0) return;

    const items = keys.map(key => ({
      key,
      value: this.pendingKeys[key].value,
      updated_at: this.pendingKeys[key].updated_at
    }));

    this.pendingKeys = {};
    this.updateStatus('syncing');

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      const resp = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Sync-Token': token
        },
        body: JSON.stringify({ items }),
        signal: controller.signal
      });
      clearTimeout(timeout);
      if (resp.status === 401) { this.handleAuthError(); return; }
      if (!resp.ok) throw new Error('Push failed');
      this.updateStatus('synced');
    } catch (err) {
      console.warn('Sync push failed, queuing for retry:', err);
      // Re-queue failed items
      items.forEach(item => {
        this.pendingKeys[item.key] = { value: item.value, updated_at: item.updated_at };
      });
      this.savePendingQueue();
      this.updateStatus('pending');
    }
  },

  async pullFromCloud() {
    const token = this.getToken();
    if (!token) { this.updateStatus('locked'); this.promptForToken(); return; }

    this.updateStatus('syncing');
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      const resp = await fetch(this.API_URL, {
        headers: { 'X-Sync-Token': token },
        signal: controller.signal
      });
      clearTimeout(timeout);
      if (resp.status === 401) { this.handleAuthError(); return; }
      if (!resp.ok) throw new Error('Pull failed');
      const { data } = await resp.json();

      let hasUpdates = false;

      for (const key of Object.keys(data)) {
        const cloud = data[key];
        const localUpdated = localStorage.getItem('fitlife_' + key + '_updated');
        const cloudTime = new Date(cloud.updated_at).getTime();
        const localTime = localUpdated ? new Date(localUpdated).getTime() : 0;

        if (cloudTime > localTime) {
          // Cloud is newer — update localStorage
          localStorage.setItem('fitlife_' + key, JSON.stringify(cloud.value));
          localStorage.setItem('fitlife_' + key + '_updated', cloud.updated_at);
          hasUpdates = true;
        } else if (localTime > cloudTime) {
          // Local is newer — push to cloud
          const val = getData(key, null);
          if (val !== null) {
            this.pendingKeys[key] = { value: val, updated_at: localUpdated };
          }
        }
      }

      // Also push any local keys that don't exist in cloud yet
      const localKeys = ['weights', 'workout_history', 'water_today', 'measurements', 'custom_schedule'];
      for (const key of localKeys) {
        if (!data[key]) {
          const val = getData(key, null);
          const ts = localStorage.getItem('fitlife_' + key + '_updated');
          if (val !== null && ts) {
            this.pendingKeys[key] = { value: val, updated_at: ts };
          }
        }
      }

      // Push any pending local changes
      if (Object.keys(this.pendingKeys).length > 0) {
        await this.pushToCloud();
      }

      if (hasUpdates) {
        refreshAllViews();
      }

      this.updateStatus('synced');
    } catch (err) {
      console.warn('Sync pull failed:', err);
      this.updateStatus('offline');
    }
  },

  savePendingQueue() {
    localStorage.setItem('fitlife_pending_sync', JSON.stringify(this.pendingKeys));
  },

  loadPendingQueue() {
    try {
      const q = localStorage.getItem('fitlife_pending_sync');
      if (q) {
        this.pendingKeys = JSON.parse(q);
        localStorage.removeItem('fitlife_pending_sync');
      }
    } catch { /* ignore */ }
  },

  updateStatus(status) {
    const el = document.getElementById('sync-status');
    if (!el) return;
    el.className = 'sync-status sync-' + status;
    el.title = status === 'synced' ? 'Synced' :
               status === 'syncing' ? 'Syncing...' :
               status === 'pending' ? 'Changes pending' :
               status === 'locked' ? 'Enter passphrase to sync' : 'Offline';
  }
};

function initSync() {
  // Load any pending changes from a previous offline session
  syncEngine.loadPendingQueue();

  // Set up passphrase modal handlers
  const submitBtn = document.getElementById('passphrase-submit');
  const skipBtn = document.getElementById('passphrase-skip');
  const input = document.getElementById('passphrase-input');
  const errorEl = document.getElementById('passphrase-error');
  const modal = document.getElementById('passphrase-modal');

  if (submitBtn) {
    submitBtn.addEventListener('click', async () => {
      const passphrase = input.value.trim();
      if (!passphrase) return;

      // Test the passphrase by making a request
      errorEl.classList.add('hidden');
      submitBtn.textContent = 'Checking...';
      submitBtn.disabled = true;

      try {
        // Add timeout to prevent infinite hang
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);

        const resp = await fetch(syncEngine.API_URL, {
          headers: { 'X-Sync-Token': passphrase },
          signal: controller.signal
        });
        clearTimeout(timeout);

        if (resp.status === 401) {
          errorEl.textContent = 'Incorrect passphrase. Please try again.';
          errorEl.classList.remove('hidden');
          submitBtn.textContent = 'Connect';
          submitBtn.disabled = false;
          return;
        }
        if (!resp.ok) throw new Error('Server error: ' + resp.status);

        // Passphrase is correct — save and sync
        syncEngine.setToken(passphrase);
        modal.classList.remove('active');
        input.value = '';
        submitBtn.textContent = 'Connect';
        submitBtn.disabled = false;
        syncEngine.pullFromCloud();
      } catch (err) {
        console.warn('Passphrase check failed:', err);
        // Network/timeout error — save token and try syncing later
        syncEngine.setToken(passphrase);
        modal.classList.remove('active');
        input.value = '';
        submitBtn.textContent = 'Connect';
        submitBtn.disabled = false;
        syncEngine.updateStatus('offline');
        showToast('Saved offline. Will sync when connected.');
      }
    });
  }

  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submitBtn.click();
    });
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      syncEngine.updateStatus('offline');
    });
  }

  // Pull latest data from cloud (will prompt for passphrase if not set)
  syncEngine.pullFromCloud();

  // Re-sync when tab becomes visible (user switches between phone and desktop)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      syncEngine.pullFromCloud();
    }
  });

  // Flush pending queue when back online
  window.addEventListener('online', () => {
    syncEngine.pullFromCloud();
  });
}

function refreshAllViews() {
  // Reload schedule from localStorage (may have changed from cloud)
  weeklySchedule = getSchedule();

  // Re-render all views
  renderStats();
  renderQuote();
  renderTodayPreview();
  renderWater();
  renderWeeklySchedule();

  // Re-render progress tab if visible
  const progressTab = document.getElementById('tab-progress');
  if (progressTab && progressTab.classList.contains('active')) {
    renderProgressTab();
  }
}

// ===== App Initialization =====
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initDashboard();
  initWorkouts();
  initProgress();
  initTimer();
  initModals();
  initSync();
});

// ===== Navigation =====
function initNavigation() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + tab).classList.add('active');
      if (tab === 'progress') renderProgressTab();
    });
  });
}

// ===== Dashboard =====
function initDashboard() {
  renderQuote();
  renderTodayPreview();
  renderWater();
  renderStats();

  document.getElementById('new-quote-btn').addEventListener('click', renderQuote);
  document.getElementById('water-add').addEventListener('click', () => {
    let w = getData('water_today', { date: todayStr(), count: 0 });
    if (w.date !== todayStr()) w = { date: todayStr(), count: 0 };
    if (w.count < 8) { w.count++; setData('water_today', w); renderWater(); }
  });
  document.getElementById('water-reset').addEventListener('click', () => {
    setData('water_today', { date: todayStr(), count: 0 }); renderWater();
  });
  document.getElementById('log-weight-btn').addEventListener('click', logWeight);
  document.getElementById('start-today-workout').addEventListener('click', () => {
    document.querySelector('[data-tab="workouts"]').click();
    const dayIndex = new Date().getDay();
    const adjIndex = dayIndex === 0 ? 6 : dayIndex - 1;
    openWorkoutDetail(adjIndex);
  });
}

function todayStr() { return new Date().toISOString().split('T')[0]; }

function renderQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('daily-quote').textContent = '"' + q + '"';
}

function renderStats() {
  const weights = getData('weights', []);
  const current = weights.length > 0 ? weights[weights.length - 1].value : 125;
  const toGo = Math.max(0, current - 120);
  const streak = getStreak();
  document.getElementById('stat-current-weight').textContent = current;
  document.getElementById('stat-to-go').textContent = toGo.toFixed(1);
  document.getElementById('stat-streak').textContent = streak;
  document.getElementById('streak-badge').textContent = streak + ' day streak';
}

function getStreak() {
  const history = getData('workout_history', []);
  if (history.length === 0) return 0;
  let streak = 0;
  const today = new Date(); today.setHours(0,0,0,0);
  for (let i = 0; i <= 60; i++) {
    const d = new Date(today); d.setDate(d.getDate() - i);
    const ds = d.toISOString().split('T')[0];
    if (history.some(h => h.date === ds)) { streak++; }
    else if (i > 0) break;
  }
  return streak;
}

function renderTodayPreview() {
  const dayIndex = new Date().getDay();
  const adjIndex = dayIndex === 0 ? 6 : dayIndex - 1;
  const workout = weeklySchedule[adjIndex];
  document.getElementById('today-day-label').textContent = workout.name;
  document.getElementById('today-day-label').className = 'badge ' + workout.badge;
  const container = document.getElementById('today-workout-preview');

  if (workout.type === 'cardio' || workout.type === 'rest') {
    container.innerHTML = `<div style="padding:12px 0;"><p style="color:var(--text-light);font-size:0.85rem;">${workout.description}</p></div>`;
    document.getElementById('start-today-workout').textContent = workout.type === 'cardio' ? 'Log Cardio' : 'View Schedule';
  } else {
    let html = '';
    workout.exercises.slice(0, 4).forEach((exId, i) => {
      const ex = exercises[exId];
      html += `<div class="exercise-preview-item">
        <div class="exercise-preview-icon">\u{1F4AA}</div>
        <div class="exercise-preview-info">
          <h4>${ex.name}</h4>
          <p>${workout.sets[i]} sets \u00D7 ${workout.reps[i]}</p>
        </div>
      </div>`;
    });
    if (workout.exercises.length > 4) {
      html += `<div style="text-align:center;padding:6px;color:var(--text-light);font-size:0.8rem;">+ ${workout.exercises.length - 4} more exercises</div>`;
    }
    container.innerHTML = html;
    document.getElementById('start-today-workout').textContent = 'Start Workout';
  }
}

function renderWater() {
  let w = getData('water_today', { date: todayStr(), count: 0 });
  if (w.date !== todayStr()) w = { date: todayStr(), count: 0 };
  document.getElementById('water-count').textContent = w.count + ' / 8 glasses';
  let html = '';
  for (let i = 0; i < 8; i++) {
    html += `<div class="water-glass ${i < w.count ? 'filled' : ''}">${i < w.count ? '\u{1F4A7}' : '\u{1F95B}'}</div>`;
  }
  document.getElementById('water-glasses').innerHTML = html;
}

function logWeight() {
  const input = document.getElementById('quick-weight');
  const val = parseFloat(input.value);
  if (!val || val < 50 || val > 500) { showToast('Please enter a valid weight'); return; }
  const weights = getData('weights', []);
  const today = todayStr();
  const existing = weights.findIndex(w => w.date === today);
  if (existing >= 0) weights[existing].value = val;
  else weights.push({ date: today, value: val });
  setData('weights', weights);
  input.value = '';
  renderStats();
  showToast('Weight logged: ' + val + ' lbs');
}

// ===== Workouts =====
function initWorkouts() {
  renderWeeklySchedule();
  document.getElementById('back-to-schedule').addEventListener('click', closeWorkoutDetail);
  document.getElementById('complete-workout-btn').addEventListener('click', completeWorkout);

  // Swap mode button
  document.getElementById('edit-schedule-btn').addEventListener('click', toggleSwapMode);
  document.getElementById('reset-schedule-btn').addEventListener('click', resetSchedule);
}

function toggleSwapMode() {
  swapMode = !swapMode;
  swapFirstIndex = -1;
  const btn = document.getElementById('edit-schedule-btn');
  const instructions = document.getElementById('swap-instructions');

  if (swapMode) {
    btn.textContent = 'Done';
    btn.classList.add('btn-done');
    instructions.classList.remove('hidden');
  } else {
    btn.textContent = 'Swap Days';
    btn.classList.remove('btn-done');
    instructions.classList.add('hidden');
  }
  renderWeeklySchedule();
}

function handleSwapClick(index) {
  if (!swapMode) return;
  if (swapFirstIndex === -1) {
    // First selection
    swapFirstIndex = index;
    renderWeeklySchedule();
  } else if (swapFirstIndex === index) {
    // Tapped same day — deselect
    swapFirstIndex = -1;
    renderWeeklySchedule();
  } else {
    // Second selection — perform the swap
    const temp = { ...weeklySchedule[swapFirstIndex] };
    const tempDay = weeklySchedule[swapFirstIndex].day;
    const otherDay = weeklySchedule[index].day;

    // Swap workout content but keep the day names in place
    weeklySchedule[swapFirstIndex] = { ...weeklySchedule[index], day: tempDay };
    weeklySchedule[index] = { ...temp, day: otherDay };

    saveSchedule(weeklySchedule);
    swapFirstIndex = -1;

    // Show/hide reset button
    document.getElementById('reset-schedule-btn').classList.toggle('hidden', !isCustomSchedule());

    renderWeeklySchedule();
    renderTodayPreview();
    showToast('Workouts swapped!');
  }
}

function resetSchedule() {
  setData('custom_schedule', null);
  weeklySchedule = getSchedule();
  swapFirstIndex = -1;
  document.getElementById('reset-schedule-btn').classList.add('hidden');
  renderWeeklySchedule();
  renderTodayPreview();
  showToast('Schedule reset to default');
}

function renderWeeklySchedule() {
  const container = document.getElementById('weekly-schedule');
  const todayIndex = new Date().getDay();
  const adjToday = todayIndex === 0 ? 6 : todayIndex - 1;
  const history = getData('workout_history', []);

  // Show/hide reset button based on custom schedule
  const resetBtn = document.getElementById('reset-schedule-btn');
  if (resetBtn) resetBtn.classList.toggle('hidden', !isCustomSchedule());

  let html = '';
  weeklySchedule.forEach((w, i) => {
    const isToday = i === adjToday;
    const startOfWeek = getWeekStart();
    const dayDate = new Date(startOfWeek); dayDate.setDate(dayDate.getDate() + i);
    const dayStr = dayDate.toISOString().split('T')[0];
    const isCompleted = history.some(h => h.date === dayStr);
    const isSwapSelected = swapMode && swapFirstIndex === i;
    html += `<div class="schedule-day${isToday ? ' today' : ''}${isCompleted ? ' completed' : ''}${swapMode ? ' swap-mode' : ''}${isSwapSelected ? ' swap-selected' : ''}" data-day="${i}">
      <span class="day-name">${w.day}</span>
      <span class="day-workout-name">${w.name}</span>
      <span class="day-badge"><span class="badge ${w.badge}">${w.type}</span></span>
      ${isSwapSelected ? '<span class="swap-icon">\u{1F4CD}</span>' : ''}
    </div>`;
  });
  container.innerHTML = html;

  container.querySelectorAll('.schedule-day').forEach(el => {
    el.addEventListener('click', () => {
      const dayIndex = parseInt(el.dataset.day);
      if (swapMode) {
        handleSwapClick(dayIndex);
      } else {
        openWorkoutDetail(dayIndex);
      }
    });
  });
}

function getWeekStart() {
  const d = new Date(); d.setHours(0,0,0,0);
  const day = d.getDay();
  const diff = day === 0 ? 6 : day - 1;
  d.setDate(d.getDate() - diff);
  return d;
}

let currentWorkoutIndex = -1;

function openWorkoutDetail(index) {
  currentWorkoutIndex = index;
  const workout = weeklySchedule[index];
  document.getElementById('workout-title').textContent = workout.day + ' — ' + workout.name;
  document.getElementById('workout-detail').classList.remove('hidden');
  setTimeout(() => document.getElementById('workout-detail').scrollIntoView({ behavior: 'smooth' }), 50);

  // Main exercises
  const exerciseContainer = document.getElementById('workout-exercises');
  if (workout.type === 'cardio' || workout.type === 'rest') {
    exerciseContainer.innerHTML = `<div class="card" style="text-align:center;padding:24px;">
      <div style="font-size:2.5rem;margin-bottom:12px;">${workout.type === 'cardio' ? '\u{1F3C3}' : '\u{1F9D8}'}</div>
      <p style="color:var(--text-light);line-height:1.6;">${workout.description}</p>
      ${workout.type === 'cardio' ? '<div style="margin-top:16px;"><h3 style="font-size:0.9rem;margin-bottom:8px;">Suggested Options:</h3><ul style="text-align:left;color:var(--text-light);font-size:0.85rem;padding-left:20px;"><li style="margin-bottom:6px;"><strong>Elliptical:</strong> 30 minutes at moderate intensity. Keep RPE at 5-6 out of 10.</li><li style="margin-bottom:6px;"><strong>Treadmill:</strong> 30 minutes walking at 3.0-3.5 mph. Add slight incline for extra challenge.</li><li style="margin-bottom:6px;"><strong>Outdoor Walk:</strong> 30-45 minutes at a brisk pace. Enjoy the fresh air!</li></ul></div>' : ''}</div>`;
  } else {
    let html = '';
    workout.exercises.forEach((exId, i) => {
      const ex = exercises[exId];
      const icon = exerciseIcons[ex.svg] || exerciseIcons.generic;
      html += `<div class="exercise-card" data-exercise="${exId}">
        <div class="exercise-thumb" style="font-size:1.5rem;">${icon}</div>
        <div class="exercise-info">
          <h4>${ex.name}</h4>
          <p>${workout.sets[i]} sets \u00D7 ${workout.reps[i]} \u2022 ${ex.equipment}</p>
        </div>
        <span class="view-btn">Details \u203A</span>
      </div>`;
    });
    exerciseContainer.innerHTML = html;

    exerciseContainer.querySelectorAll('.exercise-card').forEach(card => {
      card.addEventListener('click', () => openExerciseModal(card.dataset.exercise, currentWorkoutIndex));
    });
  }
}

function closeWorkoutDetail() {
  document.getElementById('workout-detail').classList.add('hidden');
  currentWorkoutIndex = -1;
}

function completeWorkout() {
  if (currentWorkoutIndex < 0) return;
  const workout = weeklySchedule[currentWorkoutIndex];
  const history = getData('workout_history', []);
  const today = todayStr();
  if (!history.some(h => h.date === today && h.name === workout.name)) {
    history.push({ date: today, name: workout.name, type: workout.type });
    setData('workout_history', history);
  }
  renderWeeklySchedule();
  renderStats();

  // Show celebration
  const streak = getStreak();
  document.getElementById('complete-message').textContent = getCompletionMessage();
  document.getElementById('complete-stats').innerHTML = `
    <div class="celebrate-stat"><span class="celebrate-stat-value">${streak}</span><span class="celebrate-stat-label">Day Streak</span></div>
    <div class="celebrate-stat"><span class="celebrate-stat-value">${history.length}</span><span class="celebrate-stat-label">Total Workouts</span></div>`;
  document.getElementById('complete-modal').classList.remove('hidden');
}

function getCompletionMessage() {
  const msgs = [
    "Amazing work! Every workout brings you closer to your goal!",
    "You crushed it! Your body is getting stronger every day!",
    "Fantastic effort! Consistency is the key and you've got it!",
    "Way to go! You should be so proud of yourself!",
    "Another workout done! You're building a healthier, stronger you!"
  ];
  return msgs[Math.floor(Math.random() * msgs.length)];
}

// ===== Exercise Modal =====
function openExerciseModal(exerciseId, workoutIndex) {
  const ex = exercises[exerciseId];
  if (!ex) return;
  const workout = weeklySchedule[workoutIndex];
  const exIndex = workout.exercises.indexOf(exerciseId);

  const icon = exerciseIcons[ex.svg] || exerciseIcons.generic;
  document.getElementById('exercise-illustration').innerHTML = `<div style="font-size:4rem;">${icon}</div>`;
  document.getElementById('exercise-modal-title').textContent = ex.name;
  document.getElementById('exercise-modal-muscles').innerHTML = ex.muscles.map(m => `<span class="muscle-tag">${m}</span>`).join('');
  document.getElementById('exercise-modal-sets').textContent = exIndex >= 0 ? `${workout.sets[exIndex]} sets \u00D7 ${workout.reps[exIndex]} \u2022 Rest 45-60 seconds between sets` : '';
  document.getElementById('exercise-modal-instructions').innerHTML = ex.instructions.map(s => `<li>${s}</li>`).join('');
  document.getElementById('exercise-modal-tips').innerHTML = ex.tips.map(t => `<li>${t}</li>`).join('');
  document.getElementById('exercise-modal').classList.remove('hidden');
}

function initModals() {
  document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('exercise-modal').classList.add('hidden');
  });
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', () => {
      overlay.closest('.modal').classList.add('hidden');
    });
  });
  document.querySelectorAll('.measurement-modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('measurement-modal').classList.add('hidden');
    });
  });
  document.getElementById('close-complete').addEventListener('click', () => {
    document.getElementById('complete-modal').classList.add('hidden');
  });
  document.getElementById('add-measurement-btn').addEventListener('click', () => {
    document.getElementById('measurement-modal').classList.remove('hidden');
  });
  document.getElementById('save-measurements-btn').addEventListener('click', saveMeasurements);
}

// ===== Timer =====
let timerInterval = null;
let timerSeconds = 45;
let timerMax = 45;

function initTimer() {
  document.getElementById('timer-start').addEventListener('click', startTimer);
  document.getElementById('timer-reset').addEventListener('click', resetTimer);
}

function startTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; document.getElementById('timer-start').textContent = 'Start Rest Timer'; return; }
  document.getElementById('timer-start').textContent = 'Pause';
  timerInterval = setInterval(() => {
    timerSeconds--;
    document.getElementById('timer-seconds').textContent = timerSeconds;
    document.getElementById('timer-progress-bar').style.width = ((timerSeconds / timerMax) * 100) + '%';
    if (timerSeconds <= 0) {
      clearInterval(timerInterval); timerInterval = null;
      document.getElementById('timer-start').textContent = 'Start Rest Timer';
      showToast('Rest complete! Ready for next set!');
      resetTimer();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval); timerInterval = null;
  timerSeconds = 45; timerMax = 45;
  document.getElementById('timer-seconds').textContent = '45';
  document.getElementById('timer-progress-bar').style.width = '100%';
  document.getElementById('timer-start').textContent = 'Start Rest Timer';
}

// ===== Progress =====
function initProgress() {
  document.querySelectorAll('.chart-period').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.chart-period').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWeightChart(parseInt(btn.dataset.period) || 9999);
    });
  });
}

function renderProgressTab() {
  renderWeightChart(30);
  renderMeasurements();
  renderWorkoutHistory();
  renderMilestones();
}

function renderWeightChart(days) {
  const canvas = document.getElementById('weight-chart');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = 200 * dpr;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = '200px';
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = 200;
  const padding = { top: 20, right: 20, bottom: 30, left: 45 };

  let weights = getData('weights', []);
  if (days < 9999) {
    const cutoff = new Date(); cutoff.setDate(cutoff.getDate() - days);
    weights = weights.filter(wt => new Date(wt.date) >= cutoff);
  }

  ctx.clearRect(0, 0, w, h);

  if (weights.length < 2) {
    ctx.fillStyle = '#718096';
    ctx.font = '14px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Log your weight to see your progress chart!', w / 2, h / 2 - 10);
    ctx.font = '12px -apple-system, sans-serif';
    ctx.fillText('Use the Quick Log on the Home tab', w / 2, h / 2 + 10);
    renderWeightSummary(weights);
    return;
  }

  const values = weights.map(wt => wt.value);
  const minVal = Math.min(...values, 120) - 2;
  const maxVal = Math.max(...values) + 2;
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;

  // Grid lines
  ctx.strokeStyle = '#E2E8F0';
  ctx.lineWidth = 1;
  const gridSteps = 5;
  for (let i = 0; i <= gridSteps; i++) {
    const y = padding.top + (chartH / gridSteps) * i;
    ctx.beginPath(); ctx.moveTo(padding.left, y); ctx.lineTo(w - padding.right, y); ctx.stroke();
    ctx.fillStyle = '#A0AEC0'; ctx.font = '10px -apple-system, sans-serif'; ctx.textAlign = 'right';
    const label = (maxVal - (maxVal - minVal) * (i / gridSteps)).toFixed(1);
    ctx.fillText(label, padding.left - 5, y + 3);
  }

  // Goal line
  const goalY = padding.top + chartH * (1 - (120 - minVal) / (maxVal - minVal));
  ctx.strokeStyle = '#FF6B6B'; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
  ctx.beginPath(); ctx.moveTo(padding.left, goalY); ctx.lineTo(w - padding.right, goalY); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#FF6B6B'; ctx.font = '10px -apple-system, sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('Goal: 120', w - padding.right - 50, goalY - 5);

  // Line
  ctx.strokeStyle = '#4ECDC4'; ctx.lineWidth = 2.5;
  ctx.beginPath();
  weights.forEach((wt, i) => {
    const x = padding.left + (chartW / (weights.length - 1)) * i;
    const y = padding.top + chartH * (1 - (wt.value - minVal) / (maxVal - minVal));
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Fill under line
  const lastX = padding.left + chartW;
  const lastY = padding.top + chartH * (1 - (weights[weights.length - 1].value - minVal) / (maxVal - minVal));
  ctx.lineTo(lastX, padding.top + chartH);
  ctx.lineTo(padding.left, padding.top + chartH);
  ctx.closePath();
  ctx.fillStyle = 'rgba(78, 205, 196, 0.15)';
  ctx.fill();

  // Points
  weights.forEach((wt, i) => {
    const x = padding.left + (chartW / (weights.length - 1)) * i;
    const y = padding.top + chartH * (1 - (wt.value - minVal) / (maxVal - minVal));
    ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#4ECDC4'; ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
  });

  // Date labels
  ctx.fillStyle = '#A0AEC0'; ctx.font = '9px -apple-system, sans-serif'; ctx.textAlign = 'center';
  const labelCount = Math.min(weights.length, 6);
  for (let i = 0; i < labelCount; i++) {
    const idx = Math.floor(i * (weights.length - 1) / (labelCount - 1));
    const x = padding.left + (chartW / (weights.length - 1)) * idx;
    const d = new Date(weights[idx].date);
    ctx.fillText((d.getMonth() + 1) + '/' + d.getDate(), x, h - 5);
  }

  renderWeightSummary(weights);
}

function renderWeightSummary(weights) {
  const container = document.getElementById('weight-summary');
  if (weights.length === 0) {
    container.innerHTML = '<p class="no-data">No weight data yet</p>';
    return;
  }
  const start = weights[0].value;
  const current = weights[weights.length - 1].value;
  const change = current - start;
  const toGoal = current - 120;
  container.innerHTML = `
    <div class="weight-summary-item"><span class="weight-summary-label">Start</span><span class="weight-summary-value">${start} lbs</span></div>
    <div class="weight-summary-item"><span class="weight-summary-label">Current</span><span class="weight-summary-value">${current} lbs</span></div>
    <div class="weight-summary-item"><span class="weight-summary-label">Change</span><span class="weight-summary-value ${change <= 0 ? 'positive' : 'negative'}">${change > 0 ? '+' : ''}${change.toFixed(1)} lbs</span></div>
    <div class="weight-summary-item"><span class="weight-summary-label">To Goal</span><span class="weight-summary-value">${toGoal.toFixed(1)} lbs</span></div>`;
}

function renderMeasurements() {
  const measurements = getData('measurements', []);
  const container = document.getElementById('measurements-display');
  if (measurements.length === 0) {
    container.innerHTML = '<p class="no-data">No measurements yet. Tap "+ Add" to track your inches!</p>';
    return;
  }
  const latest = measurements[measurements.length - 1];
  const prev = measurements.length > 1 ? measurements[measurements.length - 2] : null;
  const fields = [
    { key: 'waist', label: 'Waist' },
    { key: 'hips', label: 'Hips' },
    { key: 'arm', label: 'R. Arm' },
    { key: 'thigh', label: 'R. Thigh' }
  ];
  container.innerHTML = fields.map(f => {
    const val = latest[f.key];
    if (!val) return '';
    let changeHtml = '';
    if (prev && prev[f.key]) {
      const diff = val - prev[f.key];
      if (diff !== 0) {
        changeHtml = `<span class="meas-change ${diff < 0 ? 'down' : 'up'}">${diff > 0 ? '+' : ''}${diff.toFixed(1)}"</span>`;
      }
    }
    return `<div class="measurement-item"><span class="meas-label">${f.label}</span><span class="meas-value">${val}"</span>${changeHtml}</div>`;
  }).join('');
}

function saveMeasurements() {
  const waist = parseFloat(document.getElementById('meas-waist').value) || null;
  const hips = parseFloat(document.getElementById('meas-hips').value) || null;
  const arm = parseFloat(document.getElementById('meas-arm').value) || null;
  const thigh = parseFloat(document.getElementById('meas-thigh').value) || null;
  if (!waist && !hips && !arm && !thigh) { showToast('Enter at least one measurement'); return; }
  const measurements = getData('measurements', []);
  measurements.push({ date: todayStr(), waist, hips, arm, thigh });
  setData('measurements', measurements);
  document.getElementById('measurement-modal').classList.add('hidden');
  renderMeasurements();
  showToast('Measurements saved!');
  ['meas-waist','meas-hips','meas-arm','meas-thigh'].forEach(id => document.getElementById(id).value = '');
}

function renderWorkoutHistory() {
  const history = getData('workout_history', []);
  const container = document.getElementById('workout-history');
  if (history.length === 0) {
    container.innerHTML = '<p class="no-data">Complete a workout to see your history!</p>';
    return;
  }
  const recent = history.slice(-15).reverse();
  container.innerHTML = recent.map(h => {
    const d = new Date(h.date);
    return `<div class="history-item">
      <span class="history-date">${(d.getMonth()+1)}/${d.getDate()}</span>
      <span class="history-name">${h.name}</span>
      <span class="history-check">\u2713</span>
    </div>`;
  }).join('');
}

function renderMilestones() {
  const history = getData('workout_history', []);
  const weights = getData('weights', []);
  const streak = getStreak();
  const total = history.length;
  const currentWeight = weights.length > 0 ? weights[weights.length - 1].value : 125;

  const milestones = [
    { icon: '\u{1F31F}', title: 'First Workout', desc: 'Complete your first workout', achieved: total >= 1 },
    { icon: '\u{1F525}', title: '3-Day Streak', desc: 'Work out 3 days in a row', achieved: streak >= 3 },
    { icon: '\u{1F4AA}', title: '10 Workouts', desc: 'Complete 10 total workouts', achieved: total >= 10 },
    { icon: '\u{1F525}', title: '7-Day Streak', desc: 'A full week of activity!', achieved: streak >= 7 },
    { icon: '\u{2B50}', title: '25 Workouts', desc: 'A quarter century of workouts!', achieved: total >= 25 },
    { icon: '\u{1F3AF}', title: 'First Pound Lost', desc: 'Lose your first pound', achieved: weights.length > 0 && weights[0].value - currentWeight >= 1 },
    { icon: '\u{1F451}', title: 'Goal Weight', desc: 'Reach 120 lbs', achieved: currentWeight <= 120 },
    { icon: '\u{1F3C6}', title: '50 Workouts', desc: 'Half a hundred!', achieved: total >= 50 },
    { icon: '\u{1F48E}', title: '30-Day Streak', desc: 'A full month of consistency!', achieved: streak >= 30 }
  ];

  const container = document.getElementById('milestones');
  container.innerHTML = milestones.map(m => `
    <div class="milestone-item${m.achieved ? ' achieved' : ''}">
      <span class="milestone-icon">${m.achieved ? m.icon : '\u{1F512}'}</span>
      <div class="milestone-info"><h4>${m.title}</h4><p>${m.desc}</p></div>
      ${m.achieved ? '<span style="color:var(--success);font-weight:700;">\u2713</span>' : ''}
    </div>
  `).join('');
}

// ===== Toast Notification =====
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}
