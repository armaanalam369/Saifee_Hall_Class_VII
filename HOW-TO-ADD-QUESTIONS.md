# How to add questions (ICSE Class 7)

Folder layout — one folder per subject, one folder per chapter, two files per chapter:

```
data/
  manifest.js                 <- subjects + chapter lists + marking rules
  maths/
    integers/
      mcq.js                  <- multiple-choice questions
      sa.js                   <- short-answer questions
    simple-equations/
      mcq.js
      sa.js
  history/ ...  geography/ ...  biology/ ...
  english-literature/ ...  chemistry/ ...  physics/ ...  english-language/ ...
```

## Add a new chapter (3 steps)
1. Copy an existing chapter folder (e.g. `data/maths/integers`) and rename it (e.g. `data/maths/fractions`).
2. Open its `mcq.js` and `sa.js`, replace the questions, and change the key on the code line to
   `'maths/fractions/mcq'` and `'maths/fractions/sa'`.
3. Add one line to that subject in `data/manifest.js`:  `{ n: 'Fractions', d: 'fractions' }`

## Question formats
MCQ (one per line, comma-separated):
`{ q:'Question', o:['A','B','C','D'], a:1, e:'Explanation' }`   (a = index of correct option: 0=A, 1=B, 2=C, 3=D)

Short answer:
`{ q:'Question', a:'Model answer', k:['key point 1','key point 2'] }`   (k is optional)

## Marking (board style, no negative marking)
Edit `marks: { mcq: 1, sa: 2 }` in `data/manifest.js`. Short answers are self-assessed:
"Got it" earns the full marks, "Need revision" earns zero.
