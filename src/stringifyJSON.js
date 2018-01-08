// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

/*
Description: Takes an input (String, Boolean, Array, object) and outputs it as a
string
*/

/*
Need to check input type for:
1. Null/Undefined
2. String
3. Number
4. Boolean
5. Array
6. Object
*/

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // Check if input is a string
  if(typeof(obj) === 'string'){
    return '"' + obj + '"';
  }

  // // Check if input is a Number
  // else if(typeof(obj) === "number"){
  //   return '"' + obj + '"';
  // }

  // Check if input is a boolean
  else if(typeof(obj) === 'boolean'){
    return String(obj);
  }

  // Check if input is null/undefined
  else if(typeof(obj) === 'null'){
    return String(obj);
  }

  // Check if input is an Array
  else if(Array.isArray(obj)){
    // Iterate through each element in the array
    obj = obj.map(function(element){
      return stringifyJSON(element);
    });
    return '[' + obj + ']';
  }

  // Check if input is an object
  else if(obj && typeof(obj) === 'object'){
    var output = [];
    for(var x in obj){
      // Check if object contains a function or is undefined
      if(typeof(obj[x]) === 'function' || typeof(obj[x]) === 'undefined'){
        // Breaks on iteration to skip over any function or undefined
        continue;
      }
      // Push Key                          Push Value
      output.push(stringifyJSON(x) + ':' + stringifyJSON(obj[x]));
    }
    return '{' + output.join() + '}';
  }

  return String(obj);
};
