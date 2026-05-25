import React from "react";

function SearchFilter({ search, setSearch, genre, setGenre }) {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="Science">Science</option>
        <option value="History">History</option>
        <option value="Self Help">Self Help</option>
      </select>
    </div>
  );
}

export default SearchFilter;