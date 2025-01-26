import {BookForm} from '../organisms/BookForm.tsx'
import {useState} from "react";
import {Book} from "../../types/book.ts";

export const BookTracker = () => {
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
        publishedDate: '', // Date dd-mm-yyyy
        recommendTo: '',
        finishedDate: '', // Date dd-mm-yyyy
        readingEase: 0,
        summary: '',
    });
    return <BookForm bookData={bookData} onChange={setBookData}/>
}