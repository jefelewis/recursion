// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

/*
Description: Takes a string and outputs a boolean, string, array, object, or
number, depending on the input
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

// but you're not, so you'll write it from scratch:
var parseJSON = function(json){
  // Check if input is null/undefined
  if(typeof(json) === "null"){
    return null;
  }

  // Check if input is a string
  else if(typeof(json) === "string"){
    
  }

  // Check if input is a number
  else if(typeof(json) === "number"){
    return parseInt(json);
  }

  // Check if input is boolean
  else if(typeof(json) === "boolean"){
    if(json === true){
      return true;
    }
    else{
      return false;
    }
  }


};
