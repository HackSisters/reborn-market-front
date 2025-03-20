import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-2/3">
      <input
        type="text"
        placeholder="🔎  Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-4 rounded-lg w-full"
      />
    </div>
  );
};

export default SearchBar;
