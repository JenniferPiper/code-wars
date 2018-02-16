// partial solution, passes some tests. Doesn't eliminate strings that are too long or that contain a space.

function validateUsr(username) {
  res =  /([a-z]|_|\d){4,16}/.test(username) ;
  return res
}