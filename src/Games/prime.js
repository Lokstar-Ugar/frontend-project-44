import getRandomIt from '../utils.js';
import greeting from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// const isPrime = (number) => number % 2 === 0;

const primeGame = () => {
   const randomNum = getRandomIt(0, 50);
   const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
    return [randomNum, correctAnswer];
};



const primeStart = () => {
    greeting(primeGame, rule);
};

export default primeStart;
