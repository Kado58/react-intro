import React, { useState } from 'react';
import BookList from './component/BookList';
import BookForm from './component/BookForm';
import './BookApp.css';

interface Book {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
}

const BookApp: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const handleAddBook = () => {
    fetch('http://localhost:3001/api/books')
      .then(response => response.json())
      .then(data => {
        const books: Book[] = data.map((bookData: any) => {
          const book: Book = {
            id: bookData.id,
            title: bookData.title,
            author: bookData.author,
            publicationYear: bookData.publication_year,
            // Add other properties as needed
          };
          return book;
        });
  
        setBooks(prevBooks => [...prevBooks, ...books]);
      })
      .catch(error => {
        console.error("Error fetching book data:", error);
      });
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
