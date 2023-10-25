import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){

    return (
        <nav className=''>
            <div className="w-.5 logo">
                <Image src="/logo.png" width={128} height={77} />
            </div>
            
            <div className='linkWrapper'>
            <Link className='navLinks' href="/">Home</Link>
            <Link className='navLinks' href="/about">About</Link>
            <Link className='navLinks' href="/booking">Services</Link>
            <Link className='navLinks' href="/contact">Contact</Link>
            </div>
        </nav>
    )
}