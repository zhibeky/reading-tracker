import {Book} from "../types/book.ts"
export const saveBooksToLocalStorage = (books: Book[]) => {
    localStorage.setItem('books', JSON.stringify(books));
}

export const loadBooksFromLocalStorage = (): Book[] => {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
}

export const removeBooksFromLocalStorage =  () => {
    localStorage.removeItem('books');
}