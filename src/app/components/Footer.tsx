import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='bg-gray-950 text-white text-center py-4'>
                <p>&copy; {new Date().getFullYear()}<span className='text-red-500 p-2'>My Portfolio</span>All rights reserved </p>
            </footer>
        </div>
    )
}

export default Footer