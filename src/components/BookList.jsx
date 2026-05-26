import React from "react";
import BookCard from "./BookCard";

function BookList({ books, deleteBook, setEditingBook }) {
  if (books.length === 0) {
    return (
      <div className="no-books">
        <h2>😔 Sorry, No Books Available</h2>
        <p>Please try searching with a different title or add new books.</p>
      </div>
    );
  }

  return (
    <div className="book-list" id="books">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          deleteBook={deleteBook}
          setEditingBook={setEditingBook}
        />
      ))}
    </div>
  );
}

export default BookList;