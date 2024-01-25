import readlineSync from 'readline-sync';
// import getRandomIt from './utils.js';

const greeting = (sumRound, rule) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${userName}!`);
    console.log(rule);

    const roundCount = 3;

    for (let i = 1; i <= roundCount; i +=1) {
        const [question, correctAnswer] = sumRound();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer !== correctAnswer) {
            return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}`);
        } if (userAnswer === correctAnswer) {
            console.log('Correct!')
        }
    } return console.log(`Congrlatulations, ${userName}`);
};



export default greeting;


