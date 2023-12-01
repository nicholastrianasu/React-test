import React, { useState } from 'react';

function SearchBox({ searchTerm, onSearch, onSearchButtonClick }) {
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Buscar plato..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Buscar</button>
    </div>
  );
}

export default SearchBox;

