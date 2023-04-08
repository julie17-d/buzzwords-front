import React from 'react';
import { useParams } from "react-router-dom";

const Test = () => {
    const { bookId } = useParams();
    return (
        <p>{bookId.toString()}</p>
    )
}

export default Test;