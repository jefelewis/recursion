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
var getElementsByClassName = function(className, element){

  var elements = [];
	var element = element || document.body;

	// Compare element's classname with ClassName
	var part = element.className.split(' ');
	//
	if(part.indexOf(className) >= 0){
		elements.push(element);
	}

	// Iterate through the children
	for(var i = 0; i < element.children.length; i++){
		var results = getElementsByClassName(className, element.children[i]);
		elements = elements.concat(results);
	}
	return elements;

};
