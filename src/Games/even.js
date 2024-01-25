import getRandomIt from '../utils.js';
import greeting from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const evenGame = () => {
   const randomNum = getRandomIt(0, 50);
   const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
    return [randomNum, correctAnswer];
};

const startEven = () => {
    greeting(evenGame, rule);
};

export default startEven;
