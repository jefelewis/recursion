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
  if(json.length === 0){
    return null;
  }

  // Remove Quotations
  else if((json.slice(0,1) === '"' || json.slice(0,1) === "'") && (json.slice(json.length) === '"' || json.slice(json.length - 1)  === "'")){
    // Strips away the " or ' from the front and back
    json = json.slice(1,json.slice - 1)

  // Check if input is a string
  else if(typeof(json) === "string"){
    return
  }

  // Check if input is a number
  else if(typeof(json) === "number"){
    return Number(json);
  }

  // Check if input is boolean
  else if(json === "true" || json === true ||json === "false" || json === false){
    if(json == "true" || json === true){
      return "true";
    }
    else{
      return "false";
    }
  }
  //
  // // Check if input is array
  // else if(){
  //
  // }
  //
  // // Check if input is object
  // else if(){
  //
  // }



  }

};
