import React, { useState } from 'react';
import './BookForm.css';

interface Book {
    id: number;
    title: string;
    author: string;
    publicationYear: number;
}

interface BookFormProps {
    onAddBook: (book: Book) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onAddBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publicationYear, setPublicationYear] = useState(0);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newBook: Book = {
            id: Date.now(),
            title,
            author,
            publicationYear
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
                <input
                    type="text"
                    placeholder="Yayımlanma Yılı"
                    value={publicationYear}
                    onChange={event => setPublicationYear(parseInt(event.target.value, 10))}
                />
                <button type="submit">Ekle</button>
            </form>
        </div>
    );
};

export default BookForm;
