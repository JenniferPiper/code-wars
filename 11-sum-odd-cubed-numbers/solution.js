function cubeOdd(arr) {
  if( arr.length === 0)
    return undefined;

  for(let i in arr) {
    if (typeof(arr[i]) !== 'number')
      return undefined;
  }

  let oddNumbersArray = arr.map( x => Math.pow(x,3))
    .filter( x => Math.abs(x % 2) === 1);
  if( oddNumbersArray.length === 0)
    return 0;

  return oddNumbersArray.reduce( (sum, x) => sum += x);
}