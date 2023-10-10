import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header({ query, setQuery, handleSearch, clearImages, results }) {
    console.log(results.length)
    return (
        <div className="flex justify-center items-center">
            <div className='flex flex-col'>
                <h1 className="text-4xl font-bold">Image Search using Pixabay</h1>
                <div className='flex justify-center p-4'>
                    {results.length >= 1 ? (
                        <input
                            className="border-2 border-gray-300 bg-white h-10 px-4 rounded-full focus:outline-none"
                            type="search"
                            name="search"
                            placeholder="Search"
                            value={query}
                            disabled
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    ) : (
                        <input
                            className="border-2 border-gray-300 bg-white h-10 px-4 rounded-full focus:outline-none"
                            type="search"
                            name="search"
                            placeholder="Search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    )}
                    {results.length >= 1 ? (
                        <div className='ml-5 bg-gray-500 rounded-2xl text-white px-3 py-2 w-auto shadow-lg '>
                            <button type="submit" className="flex" onClick={handleSearch} disabled>
                                <AiOutlineSearch className='text-2xl text-center justify-center' />
                            </button>
                        </div>
                    ) : (
                        <div className='ml-5 bg-sky-600 rounded-2xl text-white px-3 py-2 w-auto shadow-lg transition-all ease-in-out duration-300 hover:scale-[1.05] hover:bg-sky-800'>
                            <button type="submit" className="flex" onClick={handleSearch}>
                                <AiOutlineSearch className='text-2xl text-center justify-center' />
                            </button>
                        </div>
                    )}
                    <button className='ml-2 bg-sky-600 rounded-2xl text-white px-3 py-2 w-auto shadow-lg transition-all ease-in-out duration-300 hover:scale-[1.05] hover:bg-sky-800'
                        onClick={clearImages}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    )
}

