var name = 'Michael Crump'; //name is using Type Inference as a string since it was declared as a string
var fullName = 'Michael Crump'; //fullName is using a Type Annotation and is declared as a string
var num = 1;
var bigNumber = 100;
var something;
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
//What if we left off the + in the previous function?
window.onload = function () {
    document.body.innerHTML = helloPerson(name);
};
//# sourceMappingURL=01.js.map