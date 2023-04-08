const DisplayBooksSearched = ({ bookSearched }) => {
    if (bookSearched.length !== 0) {
        let results = bookSearched[0].items.map(function (result) {

            return (
                <div class="flex flex-col items-center">
                    {/* <div class="flex m-2 md:m-5 lg:m-5"> */}
                        <img src={result.volumeInfo.imageLinks?.thumbnail ?? "/book-cover.png"} class="transition ease-in-out delay-100 hover:scale-150 w-16 md:w-32 lg:w-32 shadow-2xl" alt="cover" />
                        <div class="flex flex-col">
                            <h3 className="book-title" class="m-2 md:m-5 lg:m-5 font-bold">{result.volumeInfo.title ? result.volumeInfo.title : "Undefined"}</h3>
                            <h4 className="author-name" class="mb-2 md:mb-5 lg:mb-5 font-thin">{result.volumeInfo.authors ? result.volumeInfo.authors.map(
                                function (author) {
                                    if (author == result.volumeInfo.authors[-1]) {
                                        return author;
                                    }
                                    else {
                                        return author + ", ";
                                    }
                                }) : "Undefined"}</h4>
                        </div>
                    {/* </div> */}
                </div>
            )


        })
        return results;
    }
    else {
        return (
            <div>
                <h2 class="font-serif Playfair Display">start searching for books</h2>
            </div>
        )
    }
}

export default DisplayBooksSearched;