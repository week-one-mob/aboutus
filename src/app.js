import scoreAnswers from './scoreAnswers.js'

const submitButton = document.getElementById ('submit-button');
const drinkInput = document.getElementById ('drink-answer');
const colorInput = document.getElementById ('color-answer');
const animalInput = document.getElementById ('animal-answer');
const heightInput = document.getElementById ('height-answer');
const foodInput = document.getElementById ('food-answer');
const quizResults = document.getElementById ('quiz-results');


submitButton.addEventListener('click', () => {
    console.log("called");
    const drinkInputAnswer = drinkInput.value;
    const colorInputAnswer = colorInput.value;
    const animalInputAnswer = animalInput.value;
    const heightInputAnswer = heightInput.value;
    const foodInputAnswer = foodInput.value;
    console.log(drinkInputAnswer, colorInputAnswer, animalInputAnswer, heightInputAnswer, foodInputAnswer);


});