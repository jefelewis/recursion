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
  // HELPER FUNCTIONS
  // Global Variables
  var startIndex = json.slice(0,1);
  var endIndex = json.slice(json.length - 1);

  // Remove Quotations from input
  function unStringify(str){
    // Searches for " or ' at the Start and End index
    if((startIndex === '\"' || startIndex === "\'") && (endIndex === '\"' || endIndex === "\'")){
      //
      return str.slice(startIndex, endIndex);
    }
    return str;
  }



  // BASE CASES
  // Check if input is null/undefined
  if(json.length === 0){
    return null;
  }

  // Check if input is a string
  else if(typeof(json) === "string"){
    return unStringify(json);
  }

  // Check if input is a number
  else if(typeof(json) === "number"){
    return Number(json);
  }

  // Check if input is boolean
  else if(unStringify(json) === true){
    return true;
  }
  else if(unStringify(json) === false){
    return false;
  }



  // RECURSIVE CASES
  // Check if input is array
  else if(startIndex === '[' && endIndex === ']'){
    // Check to see if array is empty
    if(json === "[]"){
      return [];
    }

    // Retrieve array data
    var arrayData = json.slice(startIndex,endIndex);
    // Split up each array element
    var arrayElement = arrayData.split(",");

    // Use recursion to Iterate through each item
    var output = arrayElement.map(function(element, index, array)){
      return parseJSON(element);
    )};

    return output;
  }

  // Check if input is object
  else if(startIndex === '{' && endIndex === '}'){
    // Check to see if object is empty
    if(json === "{}"){
      return {};
    }



  }


};
