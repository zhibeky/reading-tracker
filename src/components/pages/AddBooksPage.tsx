import {useState, FormEvent} from 'react';
import {useNavigate} from "react-router-dom";

import {SignedIn, SignedOut } from "@clerk/clerk-react";

import { BookForm } from '../organisms/BookForm';
import {Book} from "../../types/book.ts";
import {Authorize} from "../organisms/Authorize.tsx";
import {BasicAlerts} from "../molecules/Alert.tsx"

const saveBookToLocalStorage = (book: Book): void => {
    const storedBooks = localStorage.getItem('books');
    const books: Book[] = storedBooks ? JSON.parse(storedBooks) : [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
};

export const AddBooksPage = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const navigate = useNavigate();

    const [bookData, setBookData] = useState<Book>({
        title: '',
        author: '',
        isAudioBook: false,
        favouriteCharacter: '',
        startedReading: '', // Date dd-mm-yyyy
        enjoymentRating: 0,
        aboutAuthor: '',
        quote: '',
        genre: '',
        publishedDate: '',
        recommendTo: '',
        finishedDate: '',
        readingEase: 0,
        summary: '',
    });



    const handleBookDataChange = (updatedData: Book) => {
        setBookData(updatedData);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Book Data Submitted:', bookData);
        saveBookToLocalStorage(bookData);
        setShowAlert(true);
        setTimeout(() => {
            setIsRedirecting(true);
            setTimeout(() => {
                navigate('/book-tracker');
            }, 1000)
        }, 500);
    };

    return (
        <main>
            <SignedOut>
                <div className="mt-6 p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md">
                    <Authorize/>
                </div>
            </SignedOut>
            <SignedIn>
                <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold  text-center mb-6 text-gray-800">
                        Track Your Reading Journey
                    </h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <BookForm bookData={bookData} onChange={handleBookDataChange} />
                        {/*<BookTrackerPage />*/}
                        {showAlert && <BasicAlerts severity="success">Book added successfully!</BasicAlerts>}
                        {isRedirecting ? (
                            <p className="text-center text-gray-600">Redirecting...</p>
                        ) : (<p></p>)}
                        <button
                            type="submit"
                            className="py-3 px-6 bg-[#E9AFA3] text-white rounded-md text-lg font-medium hover:bg-[#D79A8F] focus-outline-none focus:ring-[#E9AFA3] w-full max-w-xs mx-auto"
                        >
                            Submit
                        </button>
                    </form>

                </div>
            </SignedIn>
        </main>
    );
};
