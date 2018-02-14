function fixTheMeerkat(arr) {
  let storageBin = arr[0];
  arr[0] = arr[2];
  arr[2] = storageBin;
  return arr;
 }