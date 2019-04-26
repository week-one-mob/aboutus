const test = QUnit.test;

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

test('all answers wrong is 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const drinkAnswer = 'mud';
    const colorAnswer = 'red';
    const animalAnswer = 'spiders';
    const foodAnswer = 'meat';
    const heightAnswer = '7';
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const testScore = scoreAnswers (drinkAnswer, colorAnswer, animalAnswer, foodAnswer, heightAnswer);
    //Assert
    assert.equal(testScore, expected);
});

test('all answers right is 5', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const drinkAnswer = 'tequila';
    const colorAnswer = 'aqua';
    const animalAnswer = 'raccoon';
    const foodAnswer = 'hippeas';
    const heightAnswer = '5.7';
    const expected = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    const testScore = scoreAnswers(drinkAnswer, colorAnswer, animalAnswer, foodAnswer, heightAnswer);

    //Assert  
    assert.equal(testScore, expected);
});
