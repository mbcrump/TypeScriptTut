var name = 'Michael Crump'; //name is inferred as a string
var fullName = 'Michael Crump'; //fullName is declared as a string
var num = 1; //num is inferred as a number
var bigNumber = 100; //bigNumber is declared as a number
var something;
something = 'Michael Crump'; //Now it is a String
something = 100; //Not it is a Number
//returns MichaelCrump100
function addNumbers(num1, num2) {
    return num1 + num2;
}
addNumbers(name, something);
window.onload = function () {
    document.body.innerHTML = addNumbers(name, something);
};
//Optional Typing
//function addNumbers(num1: number, num2: number) {
//    return num1 + num2;
//}
//addNumbers(15, num)
//window.onload = () => {
//    document.body.innerHTML = addNumbers(15, num).toString();
//}; 
//# sourceMappingURL=02.js.map