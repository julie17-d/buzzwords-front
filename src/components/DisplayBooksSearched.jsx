import { Outlet, Link } from "react-router-dom";

const DisplayBooksSearched = ({ bookSearched }) => {
    if (bookSearched.length !== 0) {
        //map through and return results of search
        let results = bookSearched[0].items.map(function (result) {

            return (
                <div class="flex flex-col items-center">
                    {/* <div class="flex m-2 md:m-5 lg:m-5"> */}
                    <Link to={`book/${result.id}`}>
                        <img src={result.volumeInfo.imageLinks?.thumbnail ?? "/book-cover.png"}
                            class="transition ease-in-out delay-100 hover:scale-150 w-16 md:w-32 shadow-2xl"
                            alt="book cover"
                        />
                    </Link>
                    <div class="flex flex-col">
                        <h3 className="book-title" class="m-2 md:m-5 font-bold">{result.volumeInfo.title ? result.volumeInfo.title : "Undefined"}</h3>
                        <h4 className="author-name" class="mb-2 md:mb-5 font-thin">{result.volumeInfo.authors ? result.volumeInfo.authors.map(
                            function (author) {
                                if (result.volumeInfo.authors.length > 1) {
                                    if (author === result.volumeInfo.authors[result.volumeInfo.authors.length - 1]) {
                                        return author;
                                    } else {
                                        return author + " & ";
                                    }
                                }
                                else {
                                    return author;
                                }
                            }) : "Undefined"}</h4>
                    </div>
                    {/* </div> */}
                </div>
            )


        })
        return (
            <div>
                {results}
                {/* <Outlet /> */}
            </div>
        )
    }
    else {
        return (
            <div>
                <h2 class="font-serif Playfair Display text-base sm:text-lg lg:text-2xl">
                    start searching to see books appear
                </h2>
            </div>
        )
    }
}

export default DisplayBooksSearched;