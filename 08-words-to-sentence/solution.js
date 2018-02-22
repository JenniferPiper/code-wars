/*
I intentionally used == instead of === on line 17 and != instead of !== on line 20 because I actually want type coercion here. Apparently typeof(i) is 'string' (what? why?) and I need to compare it to tempArray.length which is of type 'number'. I could parseInt(i), or I could just use == and !=. Would it be better to use parseInt(i)?
*/
function formatWords(words){
  let tempArray = [];
  let output = [];

  //remove any blank elements
  for (let i in words){
    if (words[i]) {
      tempArray.push(words[i]);
    }
  }
  //Add commas and 'and'
  for (let i in tempArray){
    output.push(tempArray[i]);
    if (tempArray[i] !== ''){
      if (i == tempArray.length - 2){
        output.push(' and ');
      }
      else if (i != tempArray.length-1) {
        output.push(', ');
      }
    }
  }
  return(output.join(''));
}