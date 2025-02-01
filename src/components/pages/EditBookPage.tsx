import {FC, useState, useEffect, FormEvent} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Book} from "../../types/book.ts"
import {BookForm} from "../organisms/BookForm.tsx";

export const EditBookPage: FC = () => {
    const {index} = useParams<{ index: string }>();
    const navigate = useNavigate();
    const [book, setBook] = useState<Book | null>(null);

    useEffect(() => {
        const fetchBookDetails = () => {
            const booksData = localStorage.getItem("books");
            if(booksData) {
                const books: Book[] = JSON.parse(booksData);
                const bookIndex = parseInt(index || "0", 10);
                setBook(books[bookIndex] || null);
            }
        };
        fetchBookDetails();
    }, [index]);

    const handleFormChange = (updatedBook: Book) => {
        setBook(updatedBook);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(book) {
            if (!book.title || !book.author) {
                alert("Title and Author are required!");
                return;
            }
            const booksData = localStorage.getItem("books");
            if (booksData) {
                const books: Book[] = JSON.parse(booksData);
                const bookIndex = parseInt(index || "0", 10);
                books[bookIndex] = book;
                localStorage.setItem("books", JSON.stringify(books));
                console.log("Book details updated:", book);
                setTimeout(() => {
                    alert("Book details updated successfully!");
                    navigate("/book-tracker");
                }, 500);
            }
        }
    };
    if (!book) {
        return <div className="bg-gray-100 rounded md text-center">Loading book details...</div>
    }
    return (
        <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Edit Book Details
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <BookForm bookData={book} onChange={handleFormChange}/>
                <button
                    type="submit"
                    className="py-3 px-6 bg-[#E9AFA3] text-white rounded-md text-lg font-medium hover:bg-[#D79A8F] focus-outline-none focus:ring-[#E9AFA3] w-full max-w-xs mx-auto"
                >
                    Save Changes
                </button>
            </form>
        </div>
    )
}