function findAccountById(accounts, id) {
    let memberId = accounts.find(account => account.id === id);
    return memberId;
}

function sortAccountsByLastName(accounts) {
    let memberName = accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
    return memberName;
}

function getTotalNumberOfBorrows(account, books) {
    // return a number
    return books.reduce((total, book) => {
        // create a variable to store a number
        // loop through each borrow to see if it's id matches each account id
        // every time borrowTotal runs we add to total
        const borrowTotal = book.borrows.filter(borrow => borrow.id === account.id).length
        return total + borrowTotal
    }, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
    // create a variable to hold an empty array
    let booksBorrowed = []
        // create a for loop to loop through each book in the book array
    for (let book in books) {
        // write a an if statement that filters the book.borrow id to the account id and also check if the book is borrowed
        if (books[book].borrows.filter(borrow => borrow.id === account.id && borrow.returned === false).length) {
            // create a new variable to hold the new object
            const bookAccount = {
                    // use a spread operator to run through the books array again
                    ...books[book],
                    // create a key for the new object that runs a value finding the book.authorID compared to the author.id
                    author: authors.find(author => books[book].authorId === author.id)
                }
                // push bookAccount into the booksBorrowed array
            booksBorrowed.push(bookAccount)
        }

    }
    // return booksBorrowed
    return booksBorrowed;

}

module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
};