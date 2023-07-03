///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

// in JS, create a object in the format: const objectName = {key1: 'value1', key2: value2, etc...}
// value can be string, number, or even array.

const pizza = {
  name: "pepperoni",
  price: 10,
  category: "entree",
  popularity: 4.2,
  rating: 5.0,
  tags: ["kids friendly", "not gluten free", "salty"],
};

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

// access the value in an object, we can use dot notation or square brackets.
// to print, we use console.log()

console.log(pizza.popularity);

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log(pizza.tags[1]);

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

// destructuring is unpacking an element from an array or object.
// To destructure from an array, use the square bracket: const [elementName] = array.
// To destructure from an object, use curly bracket: const {keyNameInObject} = object.

const { price } = pizza;
console.log(price);

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

// Can also reassign a new variable name of an object element when restructuring: const {keyNameInObject: newName} = object
const { category: newCategoryName } = pizza;
console.log(newCategoryName);

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

// can create an array of objects in the format: const arrayObjectName = [{object1}, {object2}, {object3},...]
const foodArr = [
  {
    name: "pepperoni pizza",
    price: 10,
    category: "entree",
    popularity: 4.2,
    rating: 5.0,
    tags: ["kids friendly", "not gluten free", "salty"],
  },
  {
    name: "cheese pizza",
    price: 8,
    category: "entree",
    popularity: 4.0,
    rating: 4.5,
    tags: ["kids friendly", "not gluten free", "only cheese"],
  },
  {
    name: "cheese bread",
    price: 5,
    category: "appetizer",
    popularity: 4.8,
    rating: 4.7,
    tags: ["kids friendly", "not gluten free", "shareable"],
  },
  {
    name: "caesar salad",
    price: 7,
    category: "appetizer",
    popularity: 3.9,
    rating: 3.5,
    tags: ["healthy", "shareable"],
  },
  {
    name: "vanillar ice cream",
    price: 4,
    category: "dessert",
    popularity: 4.7,
    rating: 4.5,
    tags: ["kids friendly", "small size"],
  },
];

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//use filter() method here on the foodArr array.
//.filter() method creates a new array with some filtered elements, but the initial array stays the same.
// If the argument inside the filter.() function returns true, then the elemnet will be added to the new array.

// this function
const filteredFood = foodArr.filter((element) => {
  // filter logic: for each element in foodArr, check tags property that includes "kids friendly". Return the object.
  return element.tags.includes("kids friendly");
});

// prints out all the objects that contains the tag "kids friendly"
// console.log(filteredFood);

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

function filterByProperty(property, number, type) {
  //initialize an empty array to store filtered data
  let filteredArray = [];
  // use if-else statement to check the whether the user ask for "above" or "below" type and return the appropriate array.
  // logic: if type === "above", filter the requested 'property' that is ABOVE 'number' threshold. Save it to filtered Array.
  if (type === "above") {
    filteredArray = foodArr.filter((element) => element[property] >= number);
  }
  // logic: if type == "below", filter the request 'property that is BELOW 'number' threshold. Save it to filtered Array.
  else if (type === "below") {
    filteredArray = foodArr.filter((element = element[property] < number));
  }
  return filteredArray;
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

const filteredFoodArray = filterByProperty("rating", 4.7, "above");
console.log(filteredFoodArray);
