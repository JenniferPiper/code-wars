function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let disemvowelled = [];
  str = str.split('');
  str.forEach( (char) => {
    if(!vowels.includes(char)){
      disemvowelled.push(char);
    }
  });
  return disemvowelled.join('');
}