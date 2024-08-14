// Use `.map()` to iterate over the following array:

// const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const nums2 = array1.map((currentElement) => {
  return currentElement * 2;
});

console.log(nums2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const [firstValue, secondValue] = pizzaToppings;
console.log(firstValue);
console.log(secondValue);

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };

  const {make, model} = car; 

  console.log(make);
  console.log(model);

  // Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const controversialPizzaToppings = [...pizzaToppings]
console.log(controversialPizzaToppings); 

// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  const myCar = {...car}

  myCar.model = q7;

console.log('Original:' , car);
console.log('Clone: ' , myCar); 

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const userProfile = {
}

const propertyName = 'Casa Migos'; 




  


