import React, {useState } from 'react';
import { BookForm } from '../organisms/BookForm';

export const AddBooksPage = () => {
    const [bookData, setBookData] = useState({
        isAudiobook: false,
        title: '',
        author: '',
        enjoymentRating: 0,
        aboutAuthor: '',
        genre: '',
        publishedDate: '',
        readingEase: 0,
        summary: '',
    });

    const handleBookDataChange = (updatedData: typeof bookData) => {
        setBookData(updatedData);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Book Data Submitted:', bookData);
        alert('Form submitted successfully!');
    };

    return (
        <div style={styles.appContainer}>
            <h1 style={styles.title}>Reading App</h1>
            <form onSubmit={handleSubmit} style={styles.formContainer}>
                <BookForm bookData={bookData} onChange={handleBookDataChange} />
                <button type="submit" style={styles.submitButton}>
                    Submit
                </button>
            </form>
        </div>
    );
};

const styles = {
    appContainer: {
        padding: '24px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    title: {
        textAlign: 'center',
        marginBottom: '24px',
        color: '#1f2937',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    submitButton: {
        padding: '12px 16px',
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        cursor: 'pointer',
        alignSelf: 'center',
        width: '100%',
        maxWidth: '200px',
    },
};
