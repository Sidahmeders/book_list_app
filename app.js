
// get the values from the book form-fields

class BookFormFieldsVlues {
    constructor() {
        this.title = document.getElementById('title').value
        this.author = document.getElementById('author').value
        this.isbn = document.getElementById('isbn').value
    }
}

// represent a book

class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

// hanles UI tasks

class UI {
    static displayBooks() {
        const storedBooks = [
            {
                title: "book one",
                author: "jhon doe",
                isbn: "7353"
            }
        ]

        const books = storedBooks

        books.forEach(book => UI.addBookToList(book))
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list')
        
        const row = document.createElement('tr')

        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete">del</a></td>
        `

        list.appendChild(row)
    }

    static clearFields() {
        let { title, author, isbn } = new BookFormFieldsVlues()
        title = author = isbn = ""
    }
}

// handles storage

class Storage {
    constructor(bookForm) {
        this.bookForm = document.getElementById(bookForm)
    }
    
    storeBooks(book) {
        

    }
}

// Event: display Books

document
.addEventListener('DOMContentLoaded', UI.displayBooks)

// Event: Add a Book

document
.getElementById('book-form')
.addEventListener('submit', e => {
    const { title, author, isbn } = new BookFormFieldsVlues()
    const book = new Book(title, author, isbn)

    UI.addBookToList(book)
    UI.clearFields()
})

// Event: remove a book

