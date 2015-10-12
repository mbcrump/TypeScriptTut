var GoodBooks = (function () {
    function GoodBooks(title, isbn) {
        this.title = title;
        this.isbn = isbn;
    }
    return GoodBooks;
})();
var Author = (function () {
    function Author(goodbooks) {
        this.goodbooks = goodbooks;
    }
    ;
    Object.defineProperty(Author.prototype, "goodbooks", {
        get: function () {
            return this._goodBooks;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Please supply a book';
            this._goodBooks = value;
        },
        enumerable: true,
        configurable: true
    });
    Author.prototype.firstBook = function () {
        alert('My first book read was ' + this._goodBooks.title);
    };
    return Author;
})();
window.onload = function () {
    var book = new GoodBooks("The Martian", 444444444);
    var author = new Author(book);
    alert(author.goodbooks.title); //access through property
    author.firstBook(); //access through function
};
//# sourceMappingURL=07-classes-digging-deeper.js.map