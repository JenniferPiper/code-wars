function abbrevName(name){
  name = name.split(' ');
  name[0] = name[0].slice(0, 1).toUpperCase();
  name[1] = name[1].slice(0, 1).toUpperCase();
  return name[0] + '.' + name[1];
}