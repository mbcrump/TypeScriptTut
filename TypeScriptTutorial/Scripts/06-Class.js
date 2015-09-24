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