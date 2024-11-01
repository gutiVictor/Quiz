import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='bg-gray-900 py-5'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link to='/'>
                    <h1 className='text-white text-2xl font-bold hover:scale-110 transition-all duration-500'>
                        Quiz SUD Rama Granada AUDAVIALL
                    </h1>
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='text-white text-xl focus:outline-none md:hidden'
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h16m-7 6h7'
                        />
                    </svg>
                </button>
                <nav className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto`}>
                    <ul className='md:flex md:space-x-4'>
                        <li>
                            <Link to='/' className='text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0'>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to='/categorias' className='text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0'>
                                Categorías
                            </Link>
                        </li>
                        <li>
                            <Link to='/resultados' className='text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0'>
                                Resultados
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};