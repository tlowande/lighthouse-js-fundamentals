function laugh(num) {
  var repeatedString = "";
  while (num > 0) {
    repeatedString += "ha";
    num--;
  }
  return repeatedString + "!"
}

laugh(10);