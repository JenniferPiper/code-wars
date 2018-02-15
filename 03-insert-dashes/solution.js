function insertDash(num) {
  // convert num to an array
  num = num.toString().split('');

  // create another array to hold the output
  let newArr = [];

  //step through the num array. Push the current number to the output array, then check the current number and the number after it for oddness. If both are odd, push a dash before iterating the loop again. Don't examine the last array element here though, because there is no number after it so it will never have a dash after it.
  for (let i = 0; i < num.length - 1 ; i++){
    newArr.push(num[i]);

    if( isOdd(num[i]) && isOdd(num[i + 1]) ){
      newArr.push('-');
    }
  }
  // now push the last array element
  newArr.push(num[num.length - 1]);

  // function to test a number for oddness
  function isOdd(x){
    if(x % 2 === 1 ){
      return true;
    }
    else {
      return false;
    }
  }
  return newArr.join('');
}