const foods = [];
console.log('Excercise 1 result;' , foods);
const foods2 = ['pizza' , 'cheeseburger'];
console.log('Exercise 2 result:', foods2);
console.log(foods2.unshift('taco'));
console.log('Exercise 3 result:', (foods2));
// const favFood = ['pizza'];
function favFood(pizza){
    return pizza
}
console.log('Exercise 4 result:', (favFood)('pizza'));
const foods3 = ['taco' , 'pizza' , 'cheeseburger'];
foods3.splice(2, 0, 'tofu',);
console.log('Exercise 5 result:', (foods3));
const foods4 = ['taco', 'pizza', 'tofu', 'cheeseburger'];
foods4.splice(1, 1, 'sushi', 'cupcake');
console.log('Exercise 6 result:', (foods4));
const yummy = ['suhi', 'cupcake'];
console.log('Exercise 7 result:', yummy.slice(0));
const soyIdx = ['taco', 'sush', 'cupcake', 'tofu', 'cheeseburger'];
console.log('Exercise 8 result:', soyIdx.indexOf('tofu'));
const allFoods = ['taco -> sushi -> cupcake -> tofu -> cheeseburger'];
console.log('Exercise 9 result:', allFoods.join());
const hasSoup = ['soup'];
console.log('Exercise 10 result:', hasSoup.includes ('soup'));
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
function odds(){
    var newArray = [5, 23, 15, 21, 9, 45, 7, 81];
    for(var i=0; i < arguments.length; i++){
      newArray.push(arguments[i]);
    }
    return newArray;
  }
  
console.log('Exercise 11 result:', (odds(5, 23, 15, 21, 9, 45, 7, 81)));

  function odds(){
    var newArray = [];
    for(var i=0; i < arguments.length; i++){
      newArray.push(arguments[i]);
    }
    return newArray;
  }
  
console.log('Exercise 12 Results:');
console.log('fizz', 15, 21, 72, 9, 45, 66, 81, 90);
console.log('buzz', 100, 5, 15, 90);
console.log('fizzbuzz', 15, 21, 72, 9, 45, 66, 81, 90, 100, 5);
const numArrays3 = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
for (let i = 0; i < numArrays3.length; i++) {
    console.log(numArrays3[i]);
}
  const numlist = (7, 81, 90);
    console.log('Exercise 13 result:', [7, 81, 90]);

    var num = [66];
for (i = 0; i < num.length; i++) {
    console.log('Exercise 14 result:', num);
}

const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];

total = 0;

numArrays.forEach(function(n){
    n.forEach(function(value) {
        total += value;
    })
});

console.log('Exercise 15 Result:\n ', total);
