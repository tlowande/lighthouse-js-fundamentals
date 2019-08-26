const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;

while(i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for(var g = 0; g < ingredients.length; g++){
  console.log(ingredients[g]);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var p = 7; p < ingredients.length && p >= 0; p--) {
  console.log(ingredients[p]);
}