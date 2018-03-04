function high(x){

  x = x.split(' ');
  let letterScores = x.map( word => word.split('').map( letter => score(letter) ) );

  let scores = [];

  for (let i in letterScores) {
    if (letterScores[i].length === 0 ) {
      scores[i] = 0;
    }
    else {
      scores[i] = letterScores[i].reduce((accumulator, currentValue) => accumulator += currentValue);
    }
  }

  let highScore = 0;
  let highScoreIndex = 0;
  for (let i in scores) {
    if(scores[i] > highScore) {
      highScore = scores[i];
      highScoreIndex = i;
    }
  }
  return x[highScoreIndex];

  function score (char) {
    return parseInt(char.charCodeAt()) - 96;
  }
}