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
  // HELPER FUNCTIONS
  function addQuotes(obj){
    return '"' + obj + '"'
  }



  // BASE CASES
  // Check if input is Null/Undefined
  if(typeof(obj) === 'null'){
    return addQuotes(obj);
  }

  // Check if input is a String
  else if(typeof(obj) === 'string'){
    return addQuotes(obj);
  }

  // Check if input is a Number
  else if(typeof(obj) === 'number'){
    return obj.toString();
  }

  // Check if input is a Boolean
  else if(typeof(obj) === 'boolean'){
    return obj.toString();
  }



  // RECURSIVE CASES
  // Check if input is an Array
  else if(Array.isArray(obj)){
    // Iterate through each element in the array
    obj = obj.map(function(element){
      // Use recursion to iterate through each item
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
      // Push Key                          // Push Value
      output.push(stringifyJSON(x) + ':' + stringifyJSON(obj[x]));
    }
    return '{' + output.join() + '}';
  }

  return String(obj);
};
