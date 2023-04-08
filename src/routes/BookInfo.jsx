import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Header from '../components/Header';

const Test = () => {
    const apiKey = "AIzaSyDmyjBMXd4xErp3AweAg_Y_LMCGP-6ZM1k";
    const [book, setBook] = useState([]);

    const getBookInfos = async (bookId) => {
        try {
            const result = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}&key=${apiKey}`);
            console.log(result.data);
            setBook([result.data]);
          } catch (e) {
            console.log(e);
          }
    }
    const { bookId } = useParams();
    getBookInfos(bookId);
    // const bookInfos = await getBookInfos(bookId);
    if (book.length > 0) {
        return (
            <div className="Root" class="text-center bg-buzzwords-yellow flex flex-col items-center justify-center min-h-screen">
            <Header />
            <h2>{book.volumeInfo.title}</h2>
            </div>
        )
    } else {
        return (
            <div className="Root" class="text-center bg-buzzwords-yellow flex flex-col items-center justify-center min-h-screen">
            <Header />
            </div>
        )
    }
    
}

export default Test;