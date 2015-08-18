var name = 'Michael Crump'; //name is inferred as a string
var fullName: string = 'Michael Crump'; //fullName is declared as a string

var num = 1; //num is inferred as a number
var bigNumber: number = 100; //bigNumber is declared as a number

var something;
something = 'Michael Crump'; //Now it is a String
something = 100; //Not it is a Number

function helloPerson(s1: string) {
    return s1; //will return Michael Crump
}

helloPerson(name); //OK

window.onload = () => {
    document.body.innerHTML = helloPerson(name);
};

