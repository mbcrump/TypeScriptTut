class GoodBooks {
    constructor(public title: string, public isbn: number) { }
}

class Author {
    private _goodBooks: GoodBooks;

    constructor(goodbooks: GoodBooks) {
        this.goodbooks = goodbooks;
    };

    get goodbooks(): GoodBooks {
        return this._goodBooks;
    }

    set goodbooks(value: GoodBooks) {
        if (value == undefined) throw 'Please supply a book';
        this._goodBooks = value;
    }

    firstBook(): void {
        alert('My first book read was ' + this._goodBooks.title);
    }

}

window.onload = () => {
    var book = new GoodBooks("The Martian", 444444444);
    var author = new Author(book);
    alert(author.goodbooks.title); //access through property
    author.firstBook(); //access through function
};