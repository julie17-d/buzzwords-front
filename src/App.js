import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DisplayBooksSearched from './components/DisplayBooksSearched';

function App() {
  const [bookSearched, setBookSearched] = useState([]);
  const apiKey = "AIzaSyDmyjBMXd4xErp3AweAg_Y_LMCGP-6ZM1k";

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
    <div className="App">
      <header className="App-header">
      {/* <div class="flex items-start"> */}
        <Header />
        <SearchBar fetchSearch={fetchSearch} />
        <DisplayBooksSearched bookSearched={bookSearched} />
      {/* </div> */}
      </header>
    </div>
  );
}

export default App;
