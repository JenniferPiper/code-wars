var replaceDots = function(str) {
  //escape the dot so it is interpreted literally. Add 'g' after the last backslash to indicate 'global': replace all dots, not just the first one.
  return str.replace(/\./g, '-');
}