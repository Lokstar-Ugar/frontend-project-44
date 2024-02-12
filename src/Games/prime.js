import getRandomInRange from '../utils.js';
import greeting from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const randomNum = getRandomInRange(0, 50);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
};

const primeStart = () => {
  greeting(primeGame, rule);
};

export default primeStart;
