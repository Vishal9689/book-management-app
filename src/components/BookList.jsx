import React from "react";
import BookCard from "./BookCard";

function BookList({ books, deleteBook, setEditingBook }) {
  return (
    <div  className="book-list" id="books">
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