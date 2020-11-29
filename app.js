
// get the values from the form-fields
class BookFormFieldsVlues {
    constructor() {
        this.title = document.getElementById('title')
        this.author = document.getElementById('author')
        this.isbn = document.getElementById('isbn')
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
    // display all the stored-books in local-storage
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
            // append some td elements with the book-data (title|author|etc..)
            row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><button class="btn btn-danger btn-sm delete">del</button></td>
          `
          // set a key attribute equal to the index for reference when (update|delete|etc..)
          row.getElementsByClassName('delete').item(0).setAttribute('key', index)
          // append the new populated table-row to the table-body node
          newList.append(row)
        }) : ""
        // finally replace the old-tbody node with the latest-tbody node
        document.getElementById('book-list').replaceWith(newList)
    }

    // add a new book to the local-storage list of "Books"
    static addBookToList(book) {
        // get the all the books from local-storage
        let storedBooks = JSON.parse(localStorage.getItem('Books'))
        // check if the stored-books is not null
        storedBooks = storedBooks ? storedBooks : []
        // then push a new book to the list
        storedBooks.push(book)
        // finally rewrite the Books in local-storage with a new added book
        localStorage.setItem('Books', JSON.stringify(storedBooks))
        // and clear the form input fields
        document.getElementById('book-form').reset()
    }

    // delete a book from local-storage list of "Books"
    static deleteBookFromTheList(target) {
        // check if the target contain a delete class
        if (target.classList.contains('delete')) {
            // get the key attribute from the target
            const key = target.getAttribute('key')
            // get the list of "Books" from local-storage
            const storedBooks = JSON.parse(localStorage.getItem('Books'))
            // loop through the list of books and remove the book with target-key that eqauls to the index
            const newList = storedBooks.filter((b, index) => index.toString() !== key)
            // here we save the newList of books to local-storage
            localStorage.setItem('Books', JSON.stringify(newList))
            // lastlly we relaod the page to reassign the new updated keys for each book in the UI.displaybooks
            location.reload()
        }
    }

    // notify the user when (add|delete) a book
    static notifiyOn_add_delete_Book(message) {
        let alertNode = document.createElement('div').innerHTML = message
        alertNode.setAttribute('role', 'alert')
        alertNode.setAttribute('class', 'alert alert-danger')

        document.getElementById('book-form').append(newNode)
    }
}

// Event: display Books
document
.addEventListener('DOMContentLoaded', UI.displayBooks)

// Event: Add a Book
document
.getElementById('book-form')
.addEventListener('submit', e => {
    // get the feild values
    const { title, author, isbn } = new BookFormFieldsVlues()
    // construct a new book from the given values
    const book = new Book(title.value, author.value, isbn.value)
    
    UI.addBookToList(book)
    UI.displayBooks()
    UI.notifiyOn_add_delete_Book('new book has been added')
})

// Event: remove a book
const events = ['DOMContentLoaded', 'submit']

events.forEach(evt => {
    document.addEventListener(evt, () => {
        document
        .getElementById('book-list')
        .addEventListener('click', e => UI.deleteBookFromTheList(e.target))
    })
})
