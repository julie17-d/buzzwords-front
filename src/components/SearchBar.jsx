import React, { useEffect, useState } from "react";

const SearchBar = ({ fetchSearch }) => {
    const [search, setSearch] = useState("");

    const searched = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        fetchSearch(search);
    }, [search]);

    return (
        <div class="flex justify-center items-center">
        <input
            class="m-2 md:m-5 lg:m-5 text-black w-48 md:w-96 lg:w-96"
            type="search"
            value={search}
            placeholder=""
            onChange={(e) => searched(e)}
        ></input>
        </div>
    );
};

export default SearchBar;