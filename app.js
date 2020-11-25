
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
        // get the array of Books from local-storage
        const storedBooks = JSON.parse(localStorage.getItem('Books'))
        // create a new tbody element to update the previous one with the new data
        const newList = document.createElement('tbody')
        // add attributes (id & class) to the tbody node
        newList.setAttribute('id', 'book-list')
        newList.setAttribute('class', 'table table-striped mt-5')

        // -------------
        // create new attributes for the tbody element
        // let idAtt = document.createAttribute("id")
        // let classAtt = document.createAttribute("class")
        // // set the values of the new created attributes
        // idAtt.value = "book-list"
        // classAtt.value = "table table-striped mt-5"
        // // add the new attributes (id & class) to the tbody node
        // newList.setAttributeNode(classAtt)
        // newList.setAttributeNode(idAtt)
        //--------------

        // check if there is some books stored in local-storage
        // then loop through each book-object of the stored bookBook Array
        storedBooks ? storedBooks.forEach((book, index) => {
            // create a new table-row element 
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

