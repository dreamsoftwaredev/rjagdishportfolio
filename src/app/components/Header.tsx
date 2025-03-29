"use client"
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div>
            <header className='bg-white text-black py-4 px-6'>
                <nav className='flex justify-between items-center'>
                    <div>
                        <Link href="/">
                            <h1 className='text-2xl font-bold'>My Portfolio</h1>
                        </Link>
                    </div>
                    <div className='flex space-x-4'>
                        <Link href="/" > Home </Link>
                        <Link href='/projects'> Projects </Link>
                        <Link href='/contact'> Contact </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header