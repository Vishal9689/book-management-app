import React, { useState, useEffect } from "react";
import API from "./api";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import SearchFilter from "./components/SearchFilter";
import SplashScreen from "./components/SplashScreen";
import "./App.css";



function App() {
 const [books, setBooks] = useState([]);
const [search, setSearch] = useState("");
const [genre, setGenre] = useState("");
const [editingBook, setEditingBook] = useState(null);
const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetchBooks();

  setTimeout(() => {
    setLoading(false);
  }, 3000);
}, []);

  const fetchBooks = async () => {
    const res = await API.get("/");
    setBooks(res.data);
  };

  const addBook = async (book) => {
    if (editingBook) {
      await API.put(`/${editingBook.id}`, book);
      setEditingBook(null);
    } else {
      await API.post("/", book);
    }
    fetchBooks();
  };

  const deleteBook = async (id) => {
    await API.delete(`/${id}`);
    fetchBooks();
  };

  const filteredBooks = books.filter(
    (book) =>
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())) &&
      (genre === "" || book.genre === genre)

      
  );

  if (loading) {
  return <SplashScreen />;
}

  return (
    <div className="container">
      <nav className="navbar">
  <div className="logo">📚 BookVerse</div>
  <div className="nav-links">
    <a href="#">Home</a>
    <a href="#books">Books</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</nav>
     <h1>Smart Library Management System</h1>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
      />
    
    
    
      <BookForm addBook={addBook} editingBook={editingBook} />
<p className="book-count">📚 Books Available</p>
      <BookList
        books={filteredBooks}
        deleteBook={deleteBook}
        setEditingBook={setEditingBook}
      />
     <div className="about-section" id="about">
  <h2>📖 About BookVerse Library</h2>

  <div className="about-card">
    <p>
      <strong>BookVerse Library Management System</strong> is a modern React-based web
      application designed to simplify and streamline book management for users.
      This platform enables seamless management of book records through a clean,
      intuitive, and highly interactive interface.
    </p>

    <p>
      The application provides essential CRUD functionality, allowing users to
      <strong> add new books, edit existing records, delete entries, search by title or author,
      and filter books by category</strong>. Real-time API integration using MockAPI ensures
      smooth data handling and dynamic updates.
    </p>

    <p>
      Built with modern frontend technologies including <strong>React.js, Axios, CSS3,
      and REST API integration</strong>, this project demonstrates practical frontend
      development skills, responsive UI design, component-based architecture, and
      user-friendly digital experience.
    </p>
  </div>
</div>
     <div className="contact-section">
  <h2>Contact Developer</h2>

  <div className="contact-card" id="contact">
    <p><strong>Name:</strong> Vishal Bonde</p>
    <p><strong>Email:</strong> bondevishal27@gmail.com</p>
    <p><strong>Phone:</strong> +91 9021449829</p>
    <div className="contact-card">
  <h3>Portfolio</h3>
  <p>
    <a
      href="https://vishal9689.github.io/portfolio/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Visit My Portfolio
    </a>
  </p>
</div>
  </div>
</div>
</div>
  );
}

export default App;