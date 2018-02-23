function solution(str){
  let arr = [];
  for (let i in str) {
    arr.unshift(str[i]);
  }
  return(arr.join(''));
}