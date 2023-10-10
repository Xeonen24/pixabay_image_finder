import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

export default function TopButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className='fixed bottom-10 right-10'>
            <div className='flex justify-center items-center'>
                <div
                    className='cursor-pointer bg-sky-600 w-14 h-14 rounded-full p-[0.8rem] text-white shadow-lg transition-all ease-in-out duration-300 hover:scale-[1.05] hover:bg-sky-800'
                    onClick={scrollToTop}
                >
                    <AiOutlineArrowUp className='text-3xl' />
                </div>
            </div>
        </div>
    );
}
