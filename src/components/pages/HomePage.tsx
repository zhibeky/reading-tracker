import { useState } from 'react';
import BooksTemplate from '../templates/BooksTemplate';

export const HomePage = () => {
    const [books, setBooks] = useState([]);

    const addBook = (newBook: any) => {
        setBooks([...books, { ...newBook, id: Date.now() }]);
    };

    return <BooksTemplate books={books} onAddBook={addBook} />;
};