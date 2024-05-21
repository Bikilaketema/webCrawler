import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import DocumentList from './components/DocumentList';
import documents from './data/documents.json';
import Fuse from 'fuse.js';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    setSearched(true);
    if (query.trim()) {
      const fuse = new Fuse(documents, {
        keys: ['title', 'summary'],
        threshold: 0.3,
        tokenize: true
      });
      const result = fuse.search(query).map(({ item }) => item);
      setResults(result);
    } else {
      setResults([]);
    }
  };

  return (
    <div class="bg-gray-500 min-h-screen w-screen">
      <h1 class="text-center p-8 text-2xl text-white">Search for News</h1>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      {searched && (
        results.length > 0 ? (
          <DocumentList documents={results} />
        ) : (
          <p class="text-white text-center text-2xl mt-10">No matching documents found</p>
        )
      )}
    </div>
  );
};

export default App;
