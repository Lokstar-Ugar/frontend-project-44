import getRandomIt from '../utils.js';
import greeting from '../index.js';
// import { randomCalculation } from './index.js';

const rule = 'What is the result of the expression?';

const calculate = (num1, num2, operation) => {
    // const operations = ['*', '-', '+'];
    // const randomIndex = Math.floor(Math.random() * operations.length);
    // const operation = operations[randomIndex];
    // const num1 = getRandomIt(1, 10);
    // const num2 = getRandomIt(1, 10);
    switch (operation) {
        case '*':
          return num1 * num2;
         
        case '-':
          return num1 - num2;
          
        case '+':
          return num1 + num2;
  };
}
const calcGame = () => {
    const num1 = getRandomIt(1, 10);
    const num2 = getRandomIt(1, 10);
    const operations = ['*', '-', '+'];
    const randomIndex = Math.floor(Math.random() * operations.length);
    const operation = operations[randomIndex];
    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = calculate(num1, num2, operation).toString();
    
      return [question, correctAnswer];
  
  }

const startCalc = () => {
    greeting(calcGame, rule);
};

export default startCalc;
