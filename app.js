
// get the values from the form-fields
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
    // display all the stored-books 
    static displayBooks() {
        // get the array of Books from local-storage
        const storedBooks = JSON.parse(localStorage.getItem('Books'))
        // create a new tbody node to update the previous node with the new data
        const newList = document.createElement('tbody')
        // add attributes (id & class) to the tbody node
        newList.setAttribute('id', 'book-list')
        newList.setAttribute('class', 'table table-striped mt-5')

        // check if there is some books stored in local-storage
        // then loop through each book-object of the stored bookBook Array
        storedBooks ? storedBooks.forEach((book, index) => {
            // create a new table-row node
            const row = document.createElement('tr')
            // set a key attribute of the index to use for (update|delete|etc..)
            row.setAttribute('key', index)
            // append some td elements with the book-data (title|author|etc..)
            row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">del</a></td>
          `
          // append the new populated table-row to the table-body node
          newList.append(row)
        }) : ""

        // finally replace the old-tbody node with the latest-tbody node
        document.getElementById('book-list').replaceWith(newList)
    }

    // add a new book to the local-storage list of Books
    static addBookToList(book) {
        // get the all the books from local-storage
        let storedBooks = JSON.parse(localStorage.getItem('Books'))
        // check if the stored-books is not null
        storedBooks = storedBooks ? storedBooks : []
        // then push a new book to the list
        storedBooks.push(book)
        // finally rewrite the Books in local-storage with a new added book
        localStorage.setItem('Books', JSON.stringify(storedBooks))
    }

    static clearFormFeilds() {
        let { title, author, isbn } = new BookFormFieldsVlues()
        title = author = isbn = ""
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
    UI.clearFormFeilds()
})

// Event: remove a book

