function find_average(array) {
  let sum = array.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0
  );
  return sum / array.length;
}