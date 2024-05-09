'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import topLogo from '@/public/img/Nav/topLogo.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ModalContactUs from '../Main/components/ModalContact';
import ModalCaro from '../Main/components/ModalCaro';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);

    // If we are closing the navbar, also close the modal.
    if (isOpen) {
      setModalOpen(false);
    }
  }; 
  
  function toggleModal(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
        e.preventDefault();
        setModalOpen(!modalOpen);
    }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    
    window.addEventListener('scroll', handleScroll);



    if(isOpen || modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'visible';
    };
  }, [isOpen, modalOpen]);

  return (
    <nav className='fixed top-0 left-0 w-full z-20'>
      <div className={`transition-all ease-in-out duration-500 ${isScrolled ? 'bg-orange-200 shadow-md' : 'bg-transparent'}`}>
      <div className="hidden lg:flex justify-between items-center p-4">
        <div className="flex  items-center">
          <div style={{ 
                    width: isScrolled ? '90px' : '100px', 
                    height: isScrolled ? '85px' : '100px',
                    opacity: isScrolled ? 1 : 0.5, 
                    transition: 'width 0.6s ease-in-out, height 0.6s ease-in-out' }}>
          <Image 
            src={topLogo} 
            alt="Cafe image" 
            width={100} 
            height={100} />
            </div>
        </div>
        <div className={`flex space-x-8 text-3xl font-semibold ${isScrolled ? 'text-slate-600' : 'text-white'}`} style={{ opacity: isScrolled ? 1 : 0.7 }}>
          <Link href="/" className="hover:text-green-700">Main</Link>
          <Link href="/404" className="hover:text-green-700">Broken page</Link>
          <Link href="/about" className="hover:text-green-700">About Us</Link>
          <Link href="" className="hover:text-green-700" onClick={toggleModal}>Contact us</Link>
        </div>
      </div>
      </div>
      <div className="lg:hidden flex justify-between items-center p-4">

<button onClick={toggleNavbar} className='z-50 py-4 absolute top-0.5 flex flex-col space-y-2'>
    <span 
      className={`block h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}>

    </span>
    <span 
      className={`block h-0.5 w-8 bg-white transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}>

    </span>
    <span 
      className={`block h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}>
    </span>
</button>
</div>
{isOpen && (
    <div className="fixed inset-0 bg-orange-200 px-10 py-12 flex flex-col items-start h-full overflow-y-auto">
      
      <Link href="/" onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-indigo-700 py-3">Main</Link>
      <Link href="/404" onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-indigo-700 pb-3">Broken Page</Link>
      <Link href="/about" onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-indigo-700 pb-3">About us</Link>
      <Link href="" onClick={ toggleModal } className="text-white hover:text-indigo-700 pb-3">Contact me</Link>

      
      <div className="border-t-2 border-white my-4 w-full"></div>
      <div className="flex items-center space-x-3">
          <a href="https://github.com/Pandario">
            <FaGithub className="text-white hover:text-indigo-700" />
          </a>
          <Link href="https://github.com/Pandario" target="_blank" className="text-white hover:text-indigo-700">GitHub</Link>
        </div>

        <div className="flex items-center space-x-3">
          <a href="https://www.linkedin.com/in/andrey-chernov-549700242/">
              <FaLinkedin className="text-white hover:text-indigo-700"/>
          </a>
          <Link href="https://www.linkedin.com/in/andrey-chernov-549700242/" target="_blank" className="text-white hover:text-indigo-700">LinkedIn</Link>
        </div>
        <div className="mt-4 text-center text-white">
          © 2024 <a href="https://github.com/Pandario" className='hover:text-indigo-700'>Pandario</a>
        </div>
    </div>
)}

<ModalCaro active={modalOpen} setActive={setModalOpen}>
    <ModalContactUs active={modalOpen} setActive={setModalOpen}/>
 </ModalCaro>
                

    </nav>
  );
};

export default Navbar;