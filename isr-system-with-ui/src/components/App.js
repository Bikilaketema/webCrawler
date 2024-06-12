import React, { useState } from 'react';
import QueryForm from './QueryForm';
import Document from './Document';
import { documents } from '../data/documents';
import { buildIndex } from '../utils/indexing';
import { calculateTFIDF } from '../utils/tfidf';
import { cosineSimilarity } from '../utils/similarity';
import { extractSnippet, highlightSnippet } from '../utils/snippets';

function App() {
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false); // Flag to indicate whether a search has been performed

  const handleSearch = (query) => {
    const index = buildIndex(documents);
    const tfidf = calculateTFIDF(index, documents);
    const scores = cosineSimilarity(query, tfidf);
    const sortedDocs = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);

    const resultDocs = sortedDocs.map(id => {
      const doc = documents.find(d => d.id === parseInt(id));
      const snippet = extractSnippet(doc.text, query);
      const highlightedSnippet = highlightSnippet(snippet, query);
      return { ...doc, snippet: highlightedSnippet };
    });

    setResults(resultDocs);
    setSearched(true); // Set searched flag to true after performing the search
  };

  return (
    <div className="app" class="min-h-screen h-content">
      <h1 class="text-white text-center text-4xl font-bold p-4">Search Afaan Oromoo News</h1>
      <QueryForm onSearch={handleSearch} />
      <div className="results">
        {searched && results.length === 0 ? (
          <div className="flex flex-col justify-center items-center bg-white">
            <p className="text-red-500 font-bold text-center text-2xl p-6 bg-white">No documents matching your query.</p>
            <img src="document-not-found.jpg" className="w-[20%]" />
          </div>

        ) : (
          results.map(doc => (
            <Document key={doc.id} title={doc.title} summary={doc.summary} snippet={doc.snippet} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
