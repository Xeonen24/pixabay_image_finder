import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

export default function Main() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(0);

    async function fetchImages() {
        const encodedQuery = encodeURIComponent(query);
        const response = await axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${encodedQuery}&page=${page + 1}`);
        const newResults = response.data.hits;
        setResults([...results, ...newResults]);
        setPage(page + 1);
    }

    const handleSearch = () => {
        setResults([]);
        setPage(1);
        fetchImages();
    };

    const clearImages = () => {
        setResults([]);
        setPage(0);
    }

    return (
        <div className="h-screen p-5">
            <Header query={query} setQuery={setQuery} handleSearch={handleSearch} clearImages={clearImages} results={results} />
            <div className="flex justify-center mt-10 flex-wrap">
                {results.map((result, index) => (
                    <div key={result.id} className="w-1/3 p-3 max-w-[700px]">
                        <img
                            className='h-full object-cover rounded-lg'
                            src={result.largeImageURL}
                            alt={result.tags}
                        />
                    </div>
                ))}
                {results.length > 0 && results.length % 3 === 0 && <div className="w-full"></div>}
            </div>
            {page !== 0 && (
                <div className="text-center py-10">
                    <button
                        className="cursor-pointer bg-sky-600 rounded-full px-6 py-2.5 text-white shadow-lg transition-all ease-in-out duration-300 hover:scale-[1.05] hover:bg-sky-800"
                        onClick={fetchImages}
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}
