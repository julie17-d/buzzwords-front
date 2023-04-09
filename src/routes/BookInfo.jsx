import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import BookPageInfo from '../components/BookPageInfo';

//Page for a single book's infos
const Test = () => {
    //TODO: put apiKey in .env
    const apiKey = "AIzaSyB5ETyYFu2r_rGuxJU4tqslxjRnhGPcsp8";
    const [book, setBook] = useState([]);

    //get infos on a single speicific volume
    const getBookInfos = async (bookId) => {
        try {
            const result = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${apiKey}`)
                .then(res => setBook(res.data));
        } catch (e) {
            console.error(e);
        }
    }
    const { bookId } = useParams();
    useEffect(() => {
        setBook(getBookInfos(bookId));
        console.log("book", book);
    }, [bookId])

    return (
        <div className="BookInfo"
            class="text-center bg-buzzwords-yellow flex flex-col items-center justify-center min-h-screen">
            <Header />
            <BookPageInfo book={book} />
        </div>
    )
}

export default Test;