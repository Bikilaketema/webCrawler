import React, { useState } from 'react';

function QueryForm({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter your query"
        className="rounded-lg bg-gray-300 w-[60%] p-4 m-4 text-xl font-bold"
      />
      <button onClick={handleSearch} className="bg-blue-600 text-white p-4 rounded-lg text-xl text-bold">Search</button>
    </div>
  );
}

export default QueryForm;
