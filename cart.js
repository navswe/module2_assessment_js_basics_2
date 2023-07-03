///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

// the .reduce() callback function takes in the following arguments (accumulator, currentValue, index (option), array(optiona0)) and returns a single value.
// the following function goes through each food object in the 'cart' array, find the 'price' value, and sum up all the prices.

const summedPrice = cart.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  0
);

// testcase:
// console.log(summedPrice); // 26.97

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

// we can set this up as an arrow function:
const calcFinalPrice = (cartTotal, couponValue, tax) => {
  let totalPlusTax = cartTotal * (1 + tax);
  return `$${totalPlusTax - couponValue}`;
};

//tst case:
console.log(calcFinalPrice(50, 20, 0.08)); // $34.

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
As a restaurant owner, if I am to create a customer object for my restaurant website and assuming that the customers are registered users on my site, I am interested in the following info:
- customer name (to personalize messages & orders): "string" data type
- customer email (which is also their account ID to keep a record): "string" data type
- number of items in cart at checkout (for promotional purposes): "number" data type
- customer address (for delivery service): "string" data type
- distance from customer address to restaurant (to calculate shipping/delivery service per mileage): "number" data type

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const restaurantCustomer = {
  name: "Devvy Dev",
  email: "devvy@devmountain.com",
  totalItemsAtCheckout: 3,
  address: "123 devmountain st, Houston, TX 77001",
  distanceMiles: 5,
};
