interface Book {
    title: string;
    author: string; 
    bookInfo: () => string;
}

var b: Book = {
    title: 'Moby Dick',
    author: 'Herman Melville',
    bookInfo: function () {
        return this.title + " by : " + this.author;
    }
}

//Sample 1
//var book = b.bookInfo();
//alert(book);

//Sample 2
b.title = 'Romeo and Juliet';
b.author = 'William Shakespeare';

var book = b.bookInfo();
alert(book);