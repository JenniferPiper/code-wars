// this solution passes all the tests. 
// ^ start of string
// ([a-z]|_|\d) lowercase letter OR underscore OR number
//{4,16} repeated 4 to 16 times
// $ end of string

function validateUsr(username) {
  res =  /^([a-z]|_|\d){4,16}$/.test(username) ;
  return res
}