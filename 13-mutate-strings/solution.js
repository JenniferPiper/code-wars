function mutateMyStrings(stringOne, stringTwo){
  let currentString = stringOne.split('');
  let output = [];
  currentString.push('\n');
  output.push(currentString.join(''));
  for(let i = 0 ; i < stringOne.length ; i++ ){
    if (currentString[i] !== stringTwo[i]){
      currentString[i] = stringTwo[i];
      output.push(currentString.join(''));
    }
  }
  return output.join('');
}