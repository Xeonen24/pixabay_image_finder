import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

export default function Main() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);

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

    const openImage = (imageUrl) => {
        setSelectedImage(imageUrl);
    }

    const closeImage = () => {
        setSelectedImage(null);
    }

    return (
        <div className="h-screen p-5">
            <Header query={query} setQuery={setQuery} handleSearch={handleSearch} clearImages={clearImages} results={results} />
            <div className="flex justify-center mt-10 flex-wrap">
                {results.map((result, index) => (
                    <div key={result.id} className="w-1/3 p-3 max-w-[700px]" onClick={() => openImage(result.largeImageURL)}>
                        <img
                            className='h-full object-cover rounded-lg cursor-pointer'
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
            <div className='fixed bottom-0 mb-2 bg-gray-100 p-1 rounded-xl'>
                Crafted with ❤️ by <a className='text-sky-500' href="https://github.com/Xeonen24/">Xeon</a>
            </div>
            {selectedImage && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="max-w-screen-xl w-full">
                        <img src={selectedImage} alt="Full-size" className="w-full h-auto" />
                        <button className="absolute top-5 right-5 text-white text-xl border-white border-2 px-3 py-1 rounded-full hover:border-gray-300 hover:text-gray-300" onClick={closeImage}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}
