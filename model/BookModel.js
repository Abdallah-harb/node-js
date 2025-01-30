exports.Book = class Book{
    constructor(id,title,description,isbn,author,publisher,pages,store_id,created_at) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isbn = isbn;
        this.author = author;
        this.publisher = publisher;
        this.pages = pages;
        this.store_id = store_id;
        this.created_at = created_at;
    }
}