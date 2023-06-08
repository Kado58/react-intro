import React, { useState } from 'react';
import BookList from './component/BookList';
import BookForm from './component/BookForm';
import './BookApp.css';

interface Book {
  id: number;
  title: string;
  author: string;
}

const BookApp: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const handleAddBook = (book: Book) => {
    setBooks(prevBooks => [...prevBooks, book]);
  };

  return (
    <div className="book-app">
      <h1>Kitapçı Uygulaması</h1>
      <div className="container">
        <div className="book-form">
          <BookForm onAddBook={handleAddBook} />
        </div>
        <div className="book-list">
          <BookList books={books} />
        </div>
      </div>
    </div>
  );
};

export default BookApp;
