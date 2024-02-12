import getRandomInRange from '../utils.js';
import greeting from '../index.js';

const rule = 'What is the result of the expression?';

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '*':
      return num1 * num2;

    case '-':
      return num1 - num2;

    case '+':
      return num1 + num2;
    default:
      return 'Invalid operation';
  }
};

const calcGame = () => {
  const num1 = getRandomInRange(1, 10);
  const num2 = getRandomInRange(1, 10);
  const operations = ['*', '-', '+'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  const operation = operations[randomIndex];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = calculate(num1, num2, operation).toString();

  return [question, correctAnswer];
};

const startCalc = () => {
  greeting(calcGame, rule);
};

export default startCalc;
