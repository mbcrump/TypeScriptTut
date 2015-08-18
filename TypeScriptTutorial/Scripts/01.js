var name = 'Michael Crump'; //name is inferred as a string
var fullName = 'Michael Crump'; //fullName is declared as a string
var num = 1; //num is inferred as a number
var bigNumber = 100; //bigNumber is declared as a number
var something;
something = 'Michael Crump'; //Now it is a String
something = 100; //Not it is a Number
function helloPerson(s1) {
    return s1; //will return Michael Crump
}
helloPerson(name); //OK
window.onload = function () {
    document.body.innerHTML = helloPerson(name);
};
//# sourceMappingURL=01.js.map