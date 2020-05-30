export const createTest = (test) => {
  const newTest = {};

  newTest.name = test.name;
  newTest.pre = "pre";
  newTest.questions = [];
  for (let i = 0; i < test.questions.length; ++i) {
    newTest.questions[i] = {
      text: test.questions[i],
      id: i + 1,
      answers: [],
    };
    for (let a = 0; a < test.answers.length; ++a) {
      newTest.questions[i].answers[a] = {
        text: test.answers[a],
        id: a + 1,
      };
    }
    newTest.questions[i].answers[0].points = test.reversed.includes(i + 1)
      ? 0
      : 1;
    newTest.questions[i].answers[1].points = test.reversed.includes(i + 1)
      ? 1
      : 0;
  }

  return newTest;
};
