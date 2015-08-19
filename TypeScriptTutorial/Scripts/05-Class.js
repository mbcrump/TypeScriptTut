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
var b = new MyBook();
alert(b.bookInfo());
//# sourceMappingURL=05-Class.js.map