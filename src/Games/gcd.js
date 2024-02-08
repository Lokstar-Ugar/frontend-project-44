import getRandomIt from '../utils.js';
import greeting from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
};

const gcdGame = () => {
  const num1 = getRandomIt(1, 10);
  const num2 = getRandomIt(1, 10);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();

  return [question, correctAnswer];
};

const gcdStart = () => {
  greeting(gcdGame, rule);
};

export default gcdStart;
