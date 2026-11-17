/* =====================================================================
   ICSE Class 7 Practice Series — manifest.js
   Exam rules, the 8 subjects with their chapters, and motivational quotes.

   FOLDER LAYOUT   data/<subject>/<chapter>/mcq.js   (multiple-choice)
                   data/<subject>/<chapter>/sa.js    (short answer)
   e.g.  data/maths/integers/mcq.js     data/maths/integers/sa.js

   HOW TO ADD A NEW CHAPTER
   1. Copy any chapter folder inside the subject (e.g. data/maths/integers) and rename it, e.g. data/maths/fractions
   2. Replace the questions inside its mcq.js and sa.js
      and change the key on the first code line to  'maths/fractions/mcq'  and  'maths/fractions/sa'
   3. Add ONE line to that subject's `chapters` list below:   { n: 'Fractions', d: 'fractions' }
      (n = name shown to students, d = folder name). The order here is the order students see.
   ===================================================================== */

window.RULES = {
  examName: 'ICSE Class 7',
  /* Board-style marking: marks awarded per correct answer. NO negative marking.
     Short answers are self-assessed: "Got it" earns full marks, "Need revision" earns zero. */
  marks: { mcq: 1, sa: 2 },
  perQ: { mcq: 1, sa: 3 },        // minutes allowed per question in a full-subject timed test

  /* n = name, i = icon, k = short code (radar chart), d = folder inside /data, chapters = list of chapter folders */
  subjects: [
    { n: 'Mathematics', i: '➗', k: 'Maths', d: 'maths',
      chapters: [
      { n: "Integers", d: 'integers' },
      { n: "Simple Equations", d: 'simple-equations' },
      { n: "Fractions", d: 'fractions' },
      { n: "Exponents", d: 'exponents' }
      ] },
    { n: 'History', i: '🏰', k: 'History', d: 'history',
      chapters: [
      { n: "Medieval India", d: 'medieval-india' },
      { n: "Delhi Sultanate", d: 'delhi-sultanate' }
      ] },
    { n: 'Geography', i: '🌍', k: 'Geog', d: 'geography',
      chapters: [
      { n: "Atmosphere", d: 'atmosphere' },
      { n: "Earth's Crust", d: 'earth-s-crust' },
      { n: "Weather", d: 'weather' },
      { n: "Our Environment", d: 'our-environment' }
      ] },
    { n: 'Biology', i: '🧬', k: 'Bio', d: 'biology',
      chapters: [
      { n: "Cell", d: 'cell' },
      { n: "Plant Nutrition", d: 'plant-nutrition' },
      { n: "Digestion", d: 'digestion' },
      { n: "Respiration", d: 'respiration' }
      ] },
    { n: 'English Literature', i: '📖', k: 'Lit', d: 'english-literature',
      chapters: [
      { n: "Poetry", d: 'poetry' },
      { n: "Figures of Speech", d: 'figures-of-speech' },
      { n: "Drama", d: 'drama' }
      ] },
    { n: 'Chemistry', i: '🧪', k: 'Chem', d: 'chemistry',
      chapters: [
      { n: "Matter", d: 'matter' },
      { n: "Elements and Compounds", d: 'elements-and-compounds' },
      { n: "Acids and Bases", d: 'acids-and-bases' },
      { n: "Air and Water", d: 'air-and-water' }
      ] },
    { n: 'Physics', i: '⚛️', k: 'Phy', d: 'physics',
      chapters: [
      { n: "Motion", d: 'motion' },
      { n: "Light", d: 'light' },
      { n: "Heat", d: 'heat' },
      { n: "Energy", d: 'energy' }
      ] },
    { n: 'English Language', i: '✍️', k: 'Lang', d: 'english-language',
      chapters: [
      { n: "Grammar", d: 'grammar' },
      { n: "Vocabulary", d: 'vocabulary' }
      ] }
  ]
};

window.QUOTES = [
  'Consistency beats intensity — a little every day wins the year.',
  'Every wrong answer you review today is a mark you keep tomorrow.',
  'You don\'t need to be perfect. You need to be better than yesterday.',
  'Small daily progress adds up to big results.',
  'Practice tests are rehearsals. Make your mistakes here, not in the exam hall.',
  'Understand it once, revise it often.',
  'Curiosity is the best study habit.',
  'Hard work compounds. Start the next question.',
  'Revision is where marks are made.',
  'Slow progress is still progress.',
  'Focus on learning; the marks will follow.',
  'Today\'s effort is tomorrow\'s confidence.',
  'One more chapter. One more test. One step closer.',
  'Ask why, not just what.',
  'Be patient with the syllabus, be strict with your schedule.'
];
