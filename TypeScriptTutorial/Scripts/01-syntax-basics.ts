//Strings

var name = 'Michael Crump'; //name is using Type Inference as a string since it was declared as a string
var fullName: string = 'Michael Crump'; //fullName is using a Type Annotation 

//Numbers

var num = 1; //Type Inference automaically knows it is a number.
var num2 = 1.11; 
var bigNumber: number = 100; //Type Annotation
var anotherBigNumber: number; //We don't have to set a Value

//Booleans

var isDataPresent = true;
var isDataReallyPresent: boolean = true;

//Arrays

var myArray: string[] = ["One", "Two", "Three"];
var firstItem: string = myArray[0];
console.log(firstItem);

//Any
var something; //Type could be of type (any)
something = 'Michael Crump'; //Now it is a String
something = 100; //Now it is a Number

//Object Literals
var square = { x: 10, h: 20 };
var x = square.x; //10

//Functions
function helloPerson(s1: string) {
    return s1; //will return Michael Crump
}

//#1 What if the function was described as a number?

helloPerson(fullName); //OK

//#2: What if we left off the + in the function below?
//function helloAgain() {
//    return "Hello " fullName;
//}

//#3: This line won't work as it is expecting it to be a number.
//var bigError: number = bigNumber + 'Hello World';

window.onload = function () { document.body.innerHTML = helloPerson(name) };

//#4: You could also use shorthand syntax with the following code. 
//window.onload = () => {
//    document.body.innerHTML = helloPerson(name);
//};

