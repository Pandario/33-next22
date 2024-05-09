import React, { useState } from 'react'
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import TextHotels from './texts/TextsHotel';


function ModalHotel(): JSX.Element{
  const ImagePath: string[] = [
    '/img/Main/hotels/camp1.jpg',
    '/img/Main/hotels/camp2.jpg',
    '/img/Main/hotels/camp3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ImagePath.length - 1 : prevIndex - 1))
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ImagePath.length - 1 ? 0 : prevIndex + 1))
  }
  return (
    <div className="flex flex-col">
            <div className='font-bold'>
                {`Hotel house #${currentIndex + 1}`}
            </div>
            <div className="pb-4 inline-block">
                <div className="relative">
                    <Image
                    className='rounded' 
                    src={ImagePath[currentIndex]} 
                    width={300}
                    height={200}
                    alt={`Image ${currentIndex + 1}`}
                    />
                    
                    <div className="flex">
                        <button 
                            className="absolute top-1/2 left-1 transform -translate-y-1/2 z-10 bg-transparent hover:bg-gray-700 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded hover:opacity-40"
                            onClick={nextImage}
                        ><IoIosArrowBack size="1em" /></button>
                        <button 
                            className="absolute top-1/2 right-1 transform -translate-y-1/2 z-10 bg-transparent hover:bg-gray-700 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded hover:opacity-40" 
                            onClick={prevImage}
                        ><IoIosArrowForward size="1em" /></button>
                    </div>
                
                </div>
            
            </div>

        <TextHotels/>
    </div>

  )
}

export default ModalHotel;