//Classes as containers for different members of your
//application.
//These contain fields, constructors, 
//properties and functions. 

class MySampleClass {
    //Fields
    //Constructors
    //Properties
    //Functions
}

//Take a look at a simple one. 
class MyReallySimpleClass {
    name: string; 
    constructor(name: string) {
        this.name = name;
    }
}

//Shorthand way of looking at a class
class MyReallySimpleClass2 {
    constructor(public name: string) {}
}

//A real example 
interface Books {
    title: string;
    author: string;
    bookInfo: () => string;
}

class MyBook implements Books {
    title = 'Moby Dick';
    author = 'Herman Melville';
    bookInfo () {
        return this.title + " by : " + this.author;
    }
}

var b1: Books = new MyBook();
alert(b1.bookInfo())