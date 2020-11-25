
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
        const storedBooks = JSON.parse(localStorage.getItem('Books'))
        const newList = document.createElement('tbody')
        let idAtt = document.createAttribute("id")
        let classAtt = document.createAttribute("class")
        idAtt.value = "book-list"
        classAtt.value = "table table-striped mt-5"
        newList.setAttributeNode(classAtt)
        newList.setAttributeNode(idAtt)

        storedBooks ? storedBooks.forEach((book, index) => {
            const row = document.createElement('tr')
            row.setAttribute('key', index)
            row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">del</a></td>
          `
          newList.append(row)
        }) : ""

        document.getElementById('book-list').replaceWith(newList)
    }

    static addBookToList(book) {
        let storedBooks = JSON.parse(localStorage.getItem('Books'))
        storedBooks = storedBooks ? storedBooks : []
        storedBooks.push(book)
        localStorage.setItem('Books', JSON.stringify(storedBooks))
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
    UI.displayBooks()
})

// Event: remove a book

