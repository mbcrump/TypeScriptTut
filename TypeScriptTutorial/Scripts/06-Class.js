//Classes as containers for different members of your application.
//These contain fields, constructors, properties and functions. 
var MySampleClass = (function () {
    function MySampleClass() {
    }
    return MySampleClass;
})();
//Take a look at one. 
var MyReallySimpleClass = (function () {
    function MyReallySimpleClass(name) {
        this.name = name;
    }
    return MyReallySimpleClass;
})();
//Shorthand way of looking at a class
var MyReallySimpleClass2 = (function () {
    function MyReallySimpleClass2(name) {
        this.name = name;
    }
    return MyReallySimpleClass2;
})();
var MyBook = (function () {
    function MyBook() {
        this.title = 'Moby Dick';
        this.author = 'Herman Melville';
    }
    MyBook.prototype.bookInfo = function () {
        return this.title + " by : " + this.author;
    };
    return MyBook;
})();
var b1 = new MyBook();
alert(b1.bookInfo());
//# sourceMappingURL=06-Class.js.map