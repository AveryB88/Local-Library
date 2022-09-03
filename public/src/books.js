function findAuthorById(authors, id) {
    let bookId = authors.find(author => author.id === id);
    return bookId;
}

function findBookById(books, id) {
    let bookSource = books.find(book => book.id === id);
    return bookSource;
}

function partitionBooksByBorrowedStatus(books) {
    // write a function that will return two arrays for borrowed books and returned books
    // create two empty variables to hold the borrowed and returned books arrays
    // create another function that will hold both arrays in one array
    // create another variable that will filter through each book while accessing the borrows objec to check the returned status
    // if false push the book into the borrowedBook array, if true push the book into the returnedBook array
    // return allBooks
    let borrowedBook = [];
    let returnedBook = [];
    let allBooks = [borrowedBook, returnedBook];
    let booksSeperate = books.filter(book => book.borrows[0].returned === false ? borrowedBook.push(book) : returnedBook.push(book));
    return allBooks;
}


function getBorrowersForBook(book, accounts) {
    // create a variable that holds an empty array
    // create another variable for all borrows.id; 
    //loop through the accounts 
    // check if that variable(borrorws.id) === account.id 
    // if true then create an object {key : value}
    // the key would be the accounts
    // the value will be the returned status of a book
    // push the new object into the empty array
    // use the slice method to limit the max of 10 borrowers
    const result = book.borrows.map((ids) => {
        const members = accounts.find(account => account.id === ids.id);
        members.returned = ids.returned;
        return members;
    });
    return result.slice(0, 10)
}

module.exports = {
    findAuthorById,
    findBookById,
    partitionBooksByBorrowedStatus,
    getBorrowersForBook,
};