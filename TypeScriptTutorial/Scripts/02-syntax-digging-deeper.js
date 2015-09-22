//String
var name = "Michael Crump";
//Type any
var something;
something = 100;
//#1 What would the following function return? (if anything)
function addNumbers(num1, num2) {
    return num1 + num2;
}
window.onload = function () {
    document.body.innerHTML = addNumbers(name, something);
};
////#2: Optional Typing couldl have made this better as I could have specified my type
//function addNumbers(num1: number, num2: number) {
//    return num1 + num2;
//}
//window.onload = () => {
//    document.body.innerHTML = addNumbers(15, something).toString();
//}; 
//# sourceMappingURL=02-syntax-digging-deeper.js.map