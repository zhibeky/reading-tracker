import {useEffect, useState} from "react";
import {Link} from "react-router";
import {SignedIn, SignedOut } from "@clerk/clerk-react";
import {Book} from "../../types/book.ts"
import {Authorize} from "../organisms/Authorize";
// import { saveBooksToLocalStorage } from '../../utils/storageUtils.ts';

export const BookTrackerPage = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    useEffect(() => {
        const storedBooks = localStorage.getItem('books');
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks));
        }
    }, []);

    // const handleAddBook = (newBook: Book) => {
    //     const updatedBooks = [...books, newBook];
    //     setBooks(updatedBooks);
    //     saveBooksToLocalStorage(updatedBooks);
    // }

    const handleDelete = (index: number) => {
        const updatedBooks = books.filter((_, i) => i !== index);
        setBooks(updatedBooks);
        localStorage.setItem('books', JSON.stringify(updatedBooks));
    }

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }
    console.log(books)

    // @ts-ignore
    // @ts-ignore
    return (
        <main>
            <SignedOut>
                <div className="mt-6 p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md">
                    <Authorize />
                </div>
            </SignedOut>
            <SignedIn>
                <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                        Your Reading Journey
                    </h1>
                    {books.length === 0 ? (
                        <div className="text-center text-gray-600">
                            <p className="text-center text-gray-600">
                                You haven't added any books yet.
                            </p>
                            {/*<Link*/}
                            {/*    to="/add-book"*/}
                            {/*    className="mt-4 inline-block text-white bg-[#E9AFA3] px-4 py-2 rounded-md hover:bg-blue-600"*/}
                            {/*>*/}
                            {/*    Add a New Book*/}
                            {/*</Link>*/}
                        </div>
                    ) : (
                        <ul className="space-y-4">
                            {/* Display each book */}
                            {books.map((book, index) => (
                                <li
                                    key={index}
                                    className="flex flex-col gap-2 p-4 border rounded-md shadow-sm bg-gray-50"
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-800">
                                                {book.title}
                                            </h2>
                                            <p className="text-sm text-gray-600">
                                                {book.author}
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => toggleExpand(index)}
                                                // className="text-blue-500 text-sm hover:underline"
                                                className="p-2 rounded-md hover:bg-gray-100"
                                                title="Show Details"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6 text-gray-800"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25V9M19.5 9V5.25a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25V9m0 10.5v1.5m-9-1.5v1.5M3 18.75h18"
                                                    />
                                                </svg>
                                            </button>

                                            <Link
                                                to={`/edit-book/${index}`}
                                                className="p-2 rounded-md hover:bg-gray-100"
                                                title="Edit"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6 text-gray-800"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M16.862 3.487a2.25 2.25 0 113.182 3.182L6.928 19.785a4.5 4.5 0 01-1.67 1.07l-3.199 1.066 1.066-3.2a4.5 4.5 0 011.07-1.67l13.06-13.06z"
                                                    />
                                                </svg>
                                            </Link>

                                            <button
                                                onClick={() => handleDelete(index)}
                                                className="p-2 rounded-md hover:bg-gray-100"
                                                title="Delete"
                                            >
                                                <svg
                                                    className="w-6 h-6 text-gray-800"
                                                    strokeWidth={5}
                                                    fill="#000000"
                                                    version="1.1"
                                                    id="Capa_1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="-48.24 -48.24 578.91 578.91"
                                                    // xml:space="preserve"
                                                    stroke="#000000"
                                                    stroke-width="0.00482428"
                                                    transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"
                                                >
                                                    <g
                                                        id="SVGRepo_bgCarrier"
                                                        stroke-width="0"
                                                    ></g>
                                                    <g
                                                        id="SVGRepo_tracerCarrier"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    ></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098 c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117 h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828 C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879 C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096 c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266 c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979 V115.744z"
                                                                ></path>
                                                                <path
                                                                    d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"
                                                                ></path>
                                                                <path
                                                                    d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"
                                                                ></path>
                                                                <path
                                                                    d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07 c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    {expandedIndex === index && (
                                        <div>
                                            <p><strong>Audio Book:</strong> {book.isAudioBook}</p>
                                            <p><strong>Favorite Character:</strong> {book.favouriteCharacter}</p>
                                            <p><strong>Started Reading:</strong> {book.startedReading}</p>
                                            <p><strong>Enjoyment Rating:</strong> {book.enjoymentRating}</p>
                                            <p><strong>About Author:</strong> {book.aboutAuthor}</p>
                                            <p><strong>Quote:</strong> {book.quote}</p>
                                            <p><strong>Genre:</strong> {book.genre}</p>
                                            <p><strong>Published Date:</strong> {book.publishedDate}</p>
                                            <p><strong>Recommend To:</strong> {book.recommendTo}</p>
                                            <p><strong>Finished Date:</strong> {book.finishedDate}</p>
                                            <p><strong>Reading Ease:</strong> {book.readingEase}</p>
                                            <p><strong>Summary:</strong> {book.summary}</p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="mt-6 text-center">
                        <Link
                            to="/add-book"
                            className="py-3 px-6 bg-[#E9AFA3] text-white rounded-md text-lg font-medium hover:bg-[#D79A8F] focus:outline-none focus:ring-[#E9AFA3] w-full max-w-xs mx-auto"
                        >
                            Add a New Book
                        </Link>
                    </div>
                </div>
            </SignedIn>
        </main>
    )
}