var name = 'Michael Crump'; //name is using Type Inference as a string since it was declared as a string
var fullName: string = 'Michael Crump'; //fullName is using a Type Annotation and is declared as a string

var num = 1; 
var bigNumber: number = 100; 

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

