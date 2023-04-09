// import '../Root.css';
import React, { useState } from "react";
import axios from 'axios';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import DisplayBooksSearched from '../components/DisplayBooksSearched';

function Root() {
  const [bookSearched, setBookSearched] = useState([]);
  const apiKey = "AIzaSyB5ETyYFu2r_rGuxJU4tqslxjRnhGPcsp8";

  const fetchSearch = async (value) => {
    if (value) {
      try {
        const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=${apiKey}`);
        console.log(result.data);
        setBookSearched([result.data]);
      } catch (e) {
        console.log(e);
      }
    }
  }
  return (
    <div className="Root" class="text-center bg-buzzwords-yellow flex flex-col items-center justify-center min-h-screen">
      <header>
        <Header />
        <SearchBar fetchSearch={fetchSearch} />
      </header>
      <body>
        <div>

        </div>
        <DisplayBooksSearched bookSearched={bookSearched} />
      </body>
    </div>
  );
}

export default Root;
