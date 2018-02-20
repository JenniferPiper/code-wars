function isNice(arr){
  if (!arr.length){
    return false;
  }
  else {
    for (let i in arr){
      if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)){
        continue;
      }
      else {
        return false;
      }
    }
  }
  //if we get to this point, we have tested each value and found an adjacent value in the array, so the array is Nice.
  return true;
}