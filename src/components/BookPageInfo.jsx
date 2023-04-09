import parse from 'html-react-parser';

//Single Book's info page design
const BookPageInfo = ( {book} ) => {
    return (
        <div class="flex items-center">
            <img src={book.volumeInfo?.imageLinks?.thumbnail ?? "/book-cover.png"}
                class="w-60 shadow-2xl m-4"
            />
            <div class="flex flex-col m-2">
                <h2 class="text-center text-xl font-semibold font-serif Playfair Display m-3">
                    {book.volumeInfo?.title ?? ""}
                </h2>
                <h3 class="text-xl font-serif Playfair Display m-3">
                    {book.volumeInfo?.authors.toString() ?? ""}
                </h3>
                <p class="max-w-md m-3 text-justify">
                    {parse(book.volumeInfo?.description ?? "")}
                </p>
                <p class="text-sm italic">
                    {book.volumeInfo?.publisher ?? ""} - {book.volumeInfo?.publishedDate ?? ""}
                </p>
                <p class="text-sm italic">
                    {book.volumeInfo?.pageCount ?? ""} pages
                </p>
            </div>
        </div>
    )
}

export default BookPageInfo;