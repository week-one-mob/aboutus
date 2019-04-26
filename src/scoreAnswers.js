export default scoreAnswers;

function scoreAnswers(drinkAnswer, colorAnswer, animalAnswer, foodAnswer, heightAnswer) {
    drinkAnswer = drinkAnswer.toLowerCase();
    colorAnswer = colorAnswer.toLowerCase();
    animalAnswer = animalAnswer.toLowerCase();
    foodAnswer = foodAnswer.toLowerCase();
    heightAnswer = heightAnswer.toLowerCase();

    let score = 0;

    if(colorAnswer === 'aqua'){
        score++;
    }
    if(drinkAnswer === 'tequila'){
        score++;
    }
    if(animalAnswer === 'raccoon'){
        score++;
    }
    if(foodAnswer === 'hippeas'){
        score++;
    }
    if(heightAnswer === '5.7'){
        score++;
        console.log("hello");
    }

    return score;
}