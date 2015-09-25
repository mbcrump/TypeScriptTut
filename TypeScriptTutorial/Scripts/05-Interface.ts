//Interfaces describes a Type
//Interfaces help us keep our programs error-free in the IDE or editor by providing information about the shape of the data that we are going to work with.


interface Book {
    title: string;
    author: string; 
    yearPublished?: number;
    bookInfo: () => string;
    returnTitlebyAuthor: (name: string) => void;
}

var b: Book = {
    //ISBN : 99999999990999,
    title: 'Moby Dick',
    author: 'Herman Melville',
    bookInfo: function () {
        if (this.yearPublished === undefined) {
            return this.title + " by : " + this.author;
        };
        return this.title + " by : " + this.author + " published on " + this.yearPublished;
    },
    returnTitlebyAuthor: function (author: string) {
        if (this.author === "Andy Weir") {
            return "The Martian";
        };
    }
}

//#1: Notice we can't add ISBN b/c it wasn't defined in the Book Interface

//#2: Notice that we did not supply a yearPublished variable. 
//if we get rid of the ?, the var b is not valid syntax anymore. 

//Sample 1
var book = b.bookInfo();
alert(book);

//Sample 2
b.title = 'The Martian';
b.author = 'Andy Weir';
b.yearPublished = 2014;

var book = b.bookInfo();
alert(book);

//Sample 3
var author = b.returnTitlebyAuthor("Andy Weir");
alert(author);