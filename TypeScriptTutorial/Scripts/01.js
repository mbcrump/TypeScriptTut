//Strings
var name = 'Michael Crump'; //name is using Type Inference as a string since it was declared as a string
var fullName = 'Michael Crump'; //fullName is using a Type Annotation 
//Numbers
var num = 1; //Type Inference automaically knows it is a number.
var bigNumber = 100; //Type Annotation
var anotherBigNumber; //We don't have to set a Value
//Any
var something; //Type could be of type (any)
something = 'Michael Crump'; //Now it is a String
something = 100; //Now it is a Number
function helloPerson(s1) {
    return s1; //will return Michael Crump
}
//#1 What if the function was described as a number?
helloPerson(fullName); //OK
//function helloAgain() {
//    return "Hello " fullName;
//}
//#2: What if we left off the + in the previous function?
//var bigError: number = bigNumber + 'Hello World';
//#3: This line won't work as it is expecting it to be a number.
window.onload = function () {
    document.body.innerHTML = helloPerson(name);
};
//# sourceMappingURL=01.js.map