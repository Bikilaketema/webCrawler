import React from 'react';

const SearchBar = ({ query, setQuery, handleSearch }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    };

    return (
        <form class="rounded-md flex gap-4 bg-white p-4 items-center justify-center" onSubmit={onSubmit}>
            <input
            class="bg-blue-400 rounded-md p-4 focus:outline-none placeholder:text-white"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for documents..."
            />
            <button type="submit" class="bg-blue-400 rounded-md p-4">Search</button>
        </form>
    );
};

export default SearchBar;
