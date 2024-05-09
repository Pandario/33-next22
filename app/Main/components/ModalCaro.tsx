import React, { ReactNode, useEffect } from 'react';

interface ModalCaroProps {
  active: boolean;
  setActive: (active: boolean) => void;
  children: ReactNode;
}

const ModalCaro: React.FC<ModalCaroProps> = ({ active, setActive, children }) => {
  // Function to stop event propagation
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  useEffect( () => {
    if(active) {
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    }
  }, [active]);

  return (
    <div
      className={`fixed inset-0 z-20 ${active ? 'flex' : 'hidden'} items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out`}
      onClick={() => setActive(false)}
    >
      <div
        className="relative p-5 bg-white rounded-md shadow-lg"
        onClick={stopPropagation}
      >
        <button
          className="z-30 absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 focus:outline-none rounded-full w-8 h-8 flex items-center justify-center"
          onClick={() => setActive(false)}
        >
          X
        </button>
        <div className="">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalCaro;