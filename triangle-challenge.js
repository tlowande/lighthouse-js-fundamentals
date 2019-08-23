function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(length){
  let alocate = "";
  for(let x = 1; x <= length; x++){
    alocate += makeLine(x);
  }
  return alocate
}

console.log(buildTriangle(10));
