import getRandomInRange from '../utils.js';
import greeting from '../index.js';

const rule = 'What number is missing in the progression?';

// const arithmeticProgression = (step) => {
//   const result = [];
//   let current = getRandomInRange(5, 5);
//   for (let i = 0; i < getRandomInRange(5, 10); i += 1) {
//     result.push(current);
//     current += step;
//   }
//   return result;
// };

const arithmeticProgression = (start = 1, step = 5, progressionLength = 2) => {
  const members = [];
  for (let i = 0; i < progressionLength; i += 1) {
    members.push(start + step * i);
  }
  return members;
};

const progressionGame = () => {
  const start = getRandomInRange(1, 10);
  const step = getRandomInRange(1, 5);
  const progressionLength = getRandomInRange(5, 10);
  const progression = arithmeticProgression(start, step, progressionLength);
  const randomIndex = getRandomInRange(0, progression.length - 1);
  const correctAnswer = progression[randomIndex].toString();
  const hiddenIndex = '..';
  progression[randomIndex] = hiddenIndex;
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startProgression = () => {
  greeting(progressionGame, rule);
};

export default startProgression;
