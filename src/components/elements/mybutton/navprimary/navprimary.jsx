import React from 'react'

export default function ButtonNavPrimary({ children, href = "#", className, ...props }) {
    return (
        <a 
            href={href}
            className={`flex gap-2 btn-purple group/btn btn-border-dark flex-1 sm:flex-none rounded-full ${className || ''}`}
            {...props}
        >
            {children}

            <div className="flex items-center opacity-50 group-hover/btn:opacity-100 transition-opacity">
                <svg role="img" viewBox="0 0 16 16" width="0" height="10" fill="currentColor" className="w-0 group-hover/btn:w-2.5 h-3 translate-x-2.5 ease-out duration-200 transition-all transform-gpu">
                    <path d="M1 9h14a1 1 0 000-2H1a1 1 0 000 2z"></path>
                </svg>
                <svg role="img" viewBox="0 0 16 16" width="10" height="10" fill="currentColor" className="size-[0.7em]">
                    <path d="M7.293 1.707L13.586 8l-6.293 6.293a1 1 0 001.414 1.414l7-7a.999.999 0 000-1.414l-7-7a1 1 0 00-1.414 1.414z"></path>
                </svg>
            </div>
        </a>
    );
}