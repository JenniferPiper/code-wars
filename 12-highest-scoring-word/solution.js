//solution in progress. Does not work.
let test2 = 'these are words';

function high(x){
  x = x.split(' ');

  console.log(x);
  let scores = x.map( word => { return word.split('').map( letter => {return score(letter);});});
  for(let i in scores){
    scores[i].reduce( (accumulator, currentValue) => {
      accumulator += currentValue;
    });
  }
  console.log(scores);
// return x.map( currentChar => score(currentChar)).reduce((accumulator, currentValue) => accumulator += currentValue);
}
function score (char) {
  return parseInt(char.charCodeAt()) - 96;
}
high(test2);