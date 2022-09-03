function getTotalBooksCount(books) {
    let bookTotal = 0;
    let bookCount = books.forEach(book => { bookTotal += 1 });
    return bookTotal;
}

function getTotalAccountsCount(accounts) {
    let accountTotal = 0;
    let accountCount = accounts.forEach(account => { accountTotal += 1 });
    return accountTotal;
}

function getBooksBorrowedCount(books) {
    // return a number
    return books.reduce((total, book) => {
        // create a variable to store a number
        // loop through each borrow to see if it's id matches each book id
        // every time bookCount runs, add to total
        const bookCount = book.borrows.filter(borrow => borrow.returned === false).length
        return total + bookCount
    }, 0)
}

function getMostCommonGenres(books) {
    // create an empty object {}
    // loop through books array
    // create an if statement checking if each book has a genre that exist, if it does exist create an object with a key:value where key is a "genre" and adds(+=) 1 to the value; if it does not exist create an object with a key:value where key is a "genre" that sets the value to 1
    // use sort method to sort the list by number
    // return top five of the list by using the slice method
    let mostCommon = {};
    for (let book in books) {
        mostCommon[books[book].genre] ?
            mostCommon[books[book].genre] += 1 : mostCommon[books[book].genre] = 1;
    }
    console.log(mostCommon)
    return Object.keys(mostCommon).sort((genreA, genreB) => mostCommon[genreB] - mostCommon[genreA]).slice(0, 5)
        .map(genreName => {
            return {
                name: genreName,
                count: mostCommon[genreName]
            }
        })
}

function getMostPopularBooks(books) {
    // create an empty array []
    // loop through books array
    // create a variable to access book title
    // create a variable to access the borrowed books; then use .length method to run through entire array
    // use push method to push new object into the empty that holds the name and count as keys and the previous variables as the values
    // return the array and use the sort method to compare the amount of books(count)
    // return top five of the list by using the slice method
    let mostPopular = [];
    for (let book in books) {
        let bookName = books[book].title;
        let borrowCount = books[book].borrows.length;
        mostPopular.push({
            name: bookName,
            count: borrowCount
        })
    }
    return mostPopular.sort((a, b) => b.count - a.count).slice(0, 5)
}


function getMostPopularAuthors(books, authors) {
    // create an empty array []
    // loop through books array
    let popularAuthors = [];
    books.forEach((book) => {
        authors.forEach((author) => {
            const popAuth = `${author.name.first} ${author.name.last}`
            if (book.authorId === author.id) {
                popularAuthors.push({
                    name: popAuth,
                    count: book.borrows.length
                });
            }
            console.log(popularAuthors)
        })
    })
    return topFiveSorted(popularAuthors)
}

function topFiveSorted(favAuth) {
    return favAuth.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
    getTotalBooksCount,
    getTotalAccountsCount,
    getBooksBorrowedCount,
    getMostCommonGenres,
    getMostPopularBooks,
    getMostPopularAuthors,
};