const SUBJECTLIST = [
    {
      name: "physics",
      score: 6,
      subField: [
        {
          name: "lecture",
          score: 1,
        },
        {
          name: "Tutorial",
          score: 2,
        },
        {
          name: "practicals",
          score: 3,
        },
      ],
    },
    {
      name: "Chemistry",
      score: 15,
      subField: [
        {
          name: "lecture",
          score: 4,
        },
        {
          name: "Tutorial",
          score: 5,
        },
        {
          name: "practicals",
          score: 6,
        },
      ],
    },
    {
        name: "Maths",
        score: 24,
        subField: [
          {
            name: "lecture",
            score: 7,
          },
          {
            name: "Tutorial",
            score: 8,
          },
          {
            name: "practicals",
            score: 9,
          },
        ],
      },
];

const QUOTA = 30
const MULTIPLIER = 2

export {SUBJECTLIST , QUOTA , MULTIPLIER}