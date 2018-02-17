function capitalize(s){
  let evenCaps = [];
  let oddCaps = [];
  for(let i in s){
    if ( i % 2 === 0 ){
      evenCaps.push(s[i].toUpperCase());
    }
    else {
      evenCaps.push(s[i]);
    }
  }
  for (let i in s){
    if ( i % 2 === 1) {
      oddCaps.push(s[i].toUpperCase());
    }
    else {
      oddCaps.push(s[i]);
    }
  }
  evenCaps = evenCaps.join('');
  oddCaps = oddCaps.join('');

  return [ evenCaps, oddCaps ];
}