'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import topLogo from '@/public/img/Nav/topLogo.png';
import Link from 'next/link';


const Footer: React.FC = () => {

    return (

    <footer className="bg-slate-400 p-4 lg:grid lg:grid-cols-4 gap-4">
      
        <Image 
            src={topLogo} 
            alt="Cafe image" 
            width={75} 
            height={75}
            className="w-48 mx-auto lg:mx-0" />
        <div className="mb-4 lg:mb-0">
            <p className="mt-4">1234 Street Address</p>
            <p>City, State, Zip</p>
            <p>Tel: 123-456-7890</p>
            <p>Email: contact@example.com</p>
        </div>
      
      <div className="mb-4 lg:mb-0 flex flex-col ">
        <h3 className="font-bold mb-2 lg:text-left text-center">Site Map</h3>
        <Link href="/" className="hover:text-indigo-700">Main</Link>
        <Link href="/404" className="hover:text-indigo-700">Broken page</Link>
        <Link href="/about" className="hover:text-indigo-700">About Us</Link>
      </div>
      <div className="mb-4 lg:mb-0">
        <h3 className="font-bold mb-2 lg:text-left text-center">Open Hours</h3>
        <p>Mon-Fri: 9am - 5pm</p>
        <p>Sat-Sun: 10am - 6pm</p>
        <h3 className="font-bold mt-4 mb-2 lg:text-left text-center">Follow Us</h3>
        <div className="flex  justify-center lg:justify-start ">
          <a href="https://github.com/Pandario" className="text-xl mr-2">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/andrew-pandario-3a4367367/" className="text-xl">
            <FaLinkedin />
          </a>
        </div>
        </div>
    </footer>
      
    )
  }
  
  export default Footer
