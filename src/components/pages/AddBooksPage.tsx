import {useState, FormEvent} from 'react';
import { BookForm } from '../organisms/BookForm';

export const AddBooksPage = () => {
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        isAudioBook: 'false',
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

    const handleBookDataChange = (updatedData: typeof bookData) => {
        setBookData(updatedData);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Book Data Submitted:', bookData);
        alert('Form submitted successfully!');
    };

    return (
        <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold  text-center mb-6 text-gray-800">
                Track Your Reading Journey
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <BookForm bookData={bookData} onChange={handleBookDataChange} />
                {/*<BookTrackerPage />*/}
                <button type="submit" className="py-3 px-6 bg-[#E9AFA3] text-white rounded-md text-lg font-medium hover:bg-[#D79A8F] focus-outline-none focus:ring-[#E9AFA3] w-full max-w-xs mx-auto">
                    Submit
                </button>
            </form>
        </div>
    );
};
