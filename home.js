///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/

//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

// arrow functions are shorter ways of writing function expression or in-line functions.
// this is an inline function since the greetUser function only returns a string with [USERNAME].
const greetUser = (username) => `Welcome back, ${username}`;

//test case:
// since the problem asks for greetUser function to return a string, we need to console.log to check our work:
console.log(greetUser("Andrew"));

//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206];

// write as arrow function:
const canWeDeliver = (zipCode) => {
  // takes in 1 parameter which is zipCode
  // if the zipcode is included in deliveryAreaZipCodes array, return string (not console.log)
  // else, return a different string.
  if (deliveryAreaZipCodes.includes(zipCode)) {
    return `Sorry, we can't deliver to that address.`;
  } else {
    return `You're in our delivery zone!`;
  }
};

//test cases:
console.log(canWeDeliver(84606)); // You're in our delivery zone!
console.log(canWeDeliver(85205)); // Sorry, we can't deliver to that address.

/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

// since I already used 'includes' method above, I will create a new function using a loop.

const canWeDeliverTwo = (zipCode) => {
  // initialize a for-loop running from 0 to length of array, increment by 1 each time.
  for (i = 0; i < deliveryAreaZipCodes.length; i++) {
    // for each index element in the array, if it equals to 'zipcode', returns a string
    // else, return a different string.
    if (deliveryAreaZipCodes[i] === zipCode) {
      return `Sorry, we can't deliver to that address.`;
    } else {
      return `You're in our delivery zone!`;
    }
  }
};

//test cases:
console.log(canWeDeliverTwo(84606)); // You're in our delivery zone!
console.log(canWeDeliverTwo(85205)); // Sorry, we can't deliver to that address.

//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
  {
    title: "15% Off!",
    desc: "Applied to your entire order when you spend $30 or more",
  },
  {
    title: "Free Kids Meal with 2 Regular Entrees",
    desc: "   This deal lasts until the end of March! ",
  },
];

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.
*/

console.log(deals[0].title); // before using the 'replace' method, this prints: '15% Off!'
deals[0].title = deals[0].title.replace("15", "10"); // this replaces 15% with 10% in the title string stored in the object at index 0 and property = title of the array, but also reassigning it back to deals[0].title.
console.log(deals[0].title); // after using the 'replace' method, this prints: 10% Off!

/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.

    You should also make sure that there is no
    whitespace in this string, since it seems
    to be displaying wrong on the live site.
*/

console.log(deals[1].desc); // before using the 'replace' method, this prints: '   This deal lasts until the end of March! '
deals[1].desc = deals[1].desc.replace("March", "April").trim(); // this replaces "March" with "April", and also trim() whitespaces at the beginning and ending of a string.
console.log(deals[1].desc); // after using the 'replace' method , this prints: 'This deal lasts until the end of April!'
