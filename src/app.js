import scoreAnswers from './scoreAnswers.js';

const submitButton = document.getElementById ('submit-button');
const drinkInput = document.getElementById ('drink-answer');
const colorInput = document.getElementById ('color-answer');
const animalInput = document.getElementById ('animal-answer');
const heightInput = document.getElementById ('height-answer');
const foodInput = document.getElementById ('food-answer');
const quizResults = document.getElementById ('quiz-results');

submitButton.addEventListener('click', () => {

    const drinkInputAnswer = drinkInput.value;
    const colorInputAnswer = colorInput.value;
    const animalInputAnswer = animalInput.value;
    const heightInputAnswer = heightInput.value;
    const foodInputAnswer = foodInput.value;

    if(drinkInputAnswer.trim() === '' || colorInputAnswer.trim() === '' || animalInputAnswer.trim() === '' || heightInputAnswer.trim() === '' || foodInputAnswer.trim() === ''){
        alert('All answers required');
        return;
    }
    
    const score = scoreAnswers(drinkInputAnswer, colorInputAnswer, animalInputAnswer, foodInputAnswer, heightInputAnswer);

    const message = 'You got ' + score + '/5 correct!!!';

    quizResults.textContent = message;

    if(score < 2) {
        quizResults.classList.add('bad');
        quizResults.classList.remove('good');
    }
    else {
        quizResults.classList.add('good');
        quizResults.classList.remove('bad');
    }
});