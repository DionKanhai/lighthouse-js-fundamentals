const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// for loop to read contents of ingredients from start
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// while loop to read contents of ingredients from start
let i = 0;
while (i < ingredients.length) {
  console.log(packingList[i]);
  i++;
}

// for loop to read contents of ingredients from back to start
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}