// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj){
  // HRP: MODIFED
  // Check to see if input is a string
  if(typeof obj === "string" || typeof obj === "number" || typeof obj === "boolean"){
    return "'" + obj + "'"
  }

  // Check to see if input is an array
  else if(Array.isArray(obj)){

  }


  // Check to see if input is a object
  else if(typeof obj === "object"){

  }
  else{

  }
}


// String Test
console.log(stringifyJSON("String"));

// Number Test
console.log(stringifyJSON(10));

// Boolean Test
console.log(stringifyJSON(true));

// Undefined Test
console.log(stringifyJSON());

// Objects Test
console.log(stringifyJSON({Name: "Jeff", Age: 25, Tall: true, Hobbies: null}));

// Arrays Test
console.log(stringifyJSON(["Jeff", 25, true, null]));

// Function Test?
