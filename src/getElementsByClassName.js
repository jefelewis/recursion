// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

/*
Description: Returns a collection of all elements in the document with the
specified class name, as a NodeList object.
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

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var elements = document.all;
  var elementsArray = [];

  function findClass(elementIndex = 0, classListIndex = 0){
		// Base case:
		if(elementIndex === elements.length){
			return elementsArray;
		}

		// Recursive case:
		if(elements[elementIndex]["classList"].length === classListIndex){
			return findClass(elementIndex + 1);
		}
		else if(elements[elementIndex]["classList"][classListIndex] === className){
			elementsArray.push(elements[elementIndex]);
			return findClass(elementIndex + 1)
		}
	  else{
			return findClass(elementIndex, classListIndex + 1);
		}
	}
	return findClass();
};
