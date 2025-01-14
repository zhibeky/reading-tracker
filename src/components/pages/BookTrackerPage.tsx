import {useEffect, useState} from "react";
import {Link} from "react-router";
import {Book} from "../../types/book.ts"
import { saveBooksToLocalStorage, loadBooksFromLocalStorage } from '../../utils/storageUtils.ts';

export const BookTrackerPage = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        setBooks(loadBooksFromLocalStorage());
    }, []);
    const handleAddBook = (newBook: Book) => {
        const updatedBooks = [...books, newBook];
        setBooks(updatedBooks);
        saveBooksToLocalStorage(updatedBooks);
    }
    return (
        <main className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Your Reading Journey
            </h1>
            {books.length === 0 ? (
                <p className="text-center text-gray-600">
                    You haven't added any books yet.
                </p>
            ) : (
                <div>
                    {/* Display each book */}
                    {books.map((book, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
                            <p className="text-gray-600">{book.author}</p>
                            <p className="text-gray-600">Genre: {book.genre}</p>
                            <p className="text-gray-600">Started Reading: {book.startedReading}</p>
                            <p className="text-gray-600">Enjoyment Rating: {book.enjoymentRating}</p>
                            <p className="text-gray-600">Summary: {book.summary}</p>
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-6 text-center">
                <Link
                    to="/add-book"
                    className="py-3 px-6 bg-[#E9AFA3] text-white rounded-md text-lg font-medium hover:bg-[#D79A8F] focus:outline-none focus:ring-[#E9AFA3] w-full max-w-xs mx-auto"
                >
                    Add a New Book
                </Link>
            </div>
        </main>
    )
}