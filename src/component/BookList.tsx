import React from 'react';
import './BookList.css';

interface Book {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div>
      <h2>Kitaplar</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.author} - {book.publicationYear}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
