import React, { useState, useEffect } from "react";

function BookForm({ addBook, editingBook }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  useEffect(() => {
    if (editingBook) {
      setBook(editingBook);
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(book);
    setBook({ title: "", author: "", genre: "", year: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
      />
      <input
        placeholder="Author"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
      />
      <input
        placeholder="Genre"
        value={book.genre}
        onChange={(e) => setBook({ ...book, genre: e.target.value })}
      />
      <input
        placeholder="Year"
        value={book.year}
        onChange={(e) => setBook({ ...book, year: e.target.value })}
      />
      <button type="submit">Save Book</button>
    </form>
  );
}

export default BookForm;