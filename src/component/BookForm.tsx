import React, { useState } from 'react';
import './BookForm.css';

interface Book {
    id: number;
    title: string;
    author: string;
}

interface BookFormProps {
    onAddBook: (book: Book) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onAddBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newBook: Book = {
            id: Date.now(),
            title,
            author
        };
        onAddBook(newBook);
        setTitle('');
        setAuthor('');
    };

    return (
        <div className="book-form">
            <h2>Kitap Ekle</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Kitap adı"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Yazar"
                    value={author}
                    onChange={event => setAuthor(event.target.value)}
                />
                <button type="submit">Ekle</button>
            </form>
        </div>
    );
};

export default BookForm;
