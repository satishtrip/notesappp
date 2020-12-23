

const book = {
    title: "Learn the hard way",
    author: " satish"
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)