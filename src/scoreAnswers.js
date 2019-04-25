export default scoreAnswers;

function scoreAnswers(drinkAnswer, colorAnswer, animalAnswer, foodAnswer, heightAnswer) {
    drinkAnswer = drinkAnswer.toLowerCase();
    foodAnswer = foodAnswer.toLowerCase();
    heightAnswer = heightAnswer.toLowerCase();
    colorAnswer = colorAnswer.toLowerCase();
    animalAnswer = animalAnswer.toLowerCase();

    let score = 0;

    if(drinkAnswer === 'tequila'){
        score++;
    }
    if(foodAnswer === 'hippeas'){
        score++;
    }
    if(heightAnswer === '5.7'){
        score++;
    }
    if(colorAnswer === 'aqua'){
        score++;
    }
    if(animalAnswer === 'raccoon'){
        score++;
    }

    return score;
}