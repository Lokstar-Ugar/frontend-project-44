import getRandomIt from '../utils.js';
import greeting from '../index.js';

const rule = 'What number is missing in the progression?';

const arithmeticProgression = (step) => {
    let result = [];
    let current = getRandomIt(5, 5);
    for (let i = 0; i < getRandomIt(5, 10); i++) {
        result.push(current);
        current += step;
    }
    return result;
}

const progressionGame = () => {
    const step = getRandomIt(1, 5);
    const progression = arithmeticProgression(step);
    const randomIndex = getRandomIt(0, progression.length - 1);
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