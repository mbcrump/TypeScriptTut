//String
var name: string = "Michael Crump";

//any
var something;
something = 100;

//#1 What would the following function return?
//   (if anything)
 function addNumbers(num1, num2) {
    return num1 + num2;
}

window.onload = () => {
    document.body.innerHTML = addNumbers(name, something);
};

//#2: Optional Typing could have made this better 
//    as I could have specified my type

//function addNumbers(num1: number, num2: number) {
//    return num1 + num2;
//}

//window.onload = () => {
//    document.body.innerHTML = addNumbers(15, something).toString();
//};

//#3: What if I want an optional value in my parameter?

//function addNumbers(num1: number, num2?: number) {
//    if (num2 === undefined) { return num1 + num1 };
//    return num1 + num2;
//}

//window.onload = () => {
//    document.body.innerHTML = addNumbers(15).toString();
//};