"use client"

import Link from 'next/link';

function Pagination({ totalPages = 2, currentPage = 1 }) {
    return (
        <div className="flex items-center justify-center gap-2">
            {/* Bouton Précédent */}
            <Link 
                href={currentPage > 1 ? (currentPage === 2 ? '/cours' : `/cours/page-${currentPage - 1}`) : '#'}
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
                }`}
            >
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10L2 6L6 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>

            {/* Pages numérotées */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                    key={page}
                    href={page === 1 ? '/cours' : `/cours/page-${page}`}
                    className={`w-10 h-10 flex items-center justify-center rounded-full font-medium transition-colors ${
                        currentPage === page
                            ? 'bg-cyan-400 text-white shadow-md'
                            : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    {page}
                </Link>
            ))}

            {/* Bouton Suivant */}
            <Link 
                href={currentPage < totalPages ? `/cours/page-${currentPage + 1}` : '#'}
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors ${
                    currentPage === totalPages ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
                }`}
            >
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L6 6L2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
        </div>
    );
}

export default Pagination;