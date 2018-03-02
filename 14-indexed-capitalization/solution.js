function capitalize(s,arr){
  s = s.split('');
  for (let i in s) {
    if (arr.includes( parseInt(i))) s[i] = s[i].toUpperCase();
  }
  return s.join('');
}