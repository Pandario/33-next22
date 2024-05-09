'use client'
import Image from "next/image"
import { useState } from "react"
import ModalCaro from "./components/ModalCaro";
import ModalOptHotel from "./components/ModalOptHotel";
import ModalHotel from "./components/ModalHotel";

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


function Hotels(): JSX.Element{
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    function toggleModal(): void {
        setModalOpen(!modalOpen);
    }

    const images: string[] = [
        '/img/Main/mainHotel/HotelMain1.jpg',
        '/img/Main/mainHotel/HotelMain2.jpg',
        '/img/Main/mainHotel/HotelMain3.jpg',

      ];

      const [currentIndex, setCurrentIndex] = useState<number>(0);

      const goPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
      };
    
      const goNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
      };


    return (
        <div className="lg:pt-10 mx-4 lg:mt-6 mt-2">

            <div className="flex justify-center ">
            
                <div className="grid grid-cols-1 lg:grid-cols-2   mx-auto">
                    <div className="items-center order-first lg:order-none justify-center flex  relative ">

                        <div className="relative">
                            <Image
                                src={images[currentIndex]}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                                className="rounded-lg "
                            />

<button
                                className="absolute top-1/2 left-1 transform -translate-y-1/2 z-10 bg-transparent hover:bg-gray-700 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded"
                               onClick={goNext} 
                            >
                                <IoIosArrowBack size="1.5em" />
                            </button>
                            <button
                                className="absolute top-1/2 right-1 transform -translate-y-1/2 z-10 bg-transparent hover:bg-gray-700 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded"
                                onClick={goPrevious} 
                            >
                                <IoIosArrowForward size="1.5em" />
                            </button>        
       
                        </div>
                    </div>

                    <div className="flex flex-col  p-4 my-1 shadow-lg rounded-lg">

                        <h1 className="text-3xl font-bold mb-4 text-center">Our amazing Hotel {'!'}</h1>
                        <div className="flex justify-center my-8">
                            <div className="w-36 h-2 bg-orange-500  rounded-full shadow-lg"></div>
                        </div>
                        <h3 className="text-xl mb-2">
                            Welcome to Hotel Elegance, where we harmonize 
                            classic comfort with a contemporary style.
                        </h3>
                        <h5 className="text-xl mb-2">
                            Our mission is to provide an unforgettable lodging experience 
                            with rooms designed for ultimate relaxation and renewal.
                        </h5>
                        <h5 className="text-xl mb-2">
                            Warm hospitality, attentive service, and refined aesthetics 
                            set the scene for a stay of luxury and tranquility.
                        </h5>
                        <h5 className="text-xl mb-4"> 
                            Stay with us for a celebration of elegance, 
                            where every detail weaves a tale of sophistication and charm.  
                        </h5>


                        <div className="py-2 text-center">
                            <button
                            className="text-3xl px-4 py-3 bg-orange-300 text-black font-semibold rounded-lg shadow-md hover:bg-green-500 transition-colors duration-200"
                            onClick={toggleModal}
                            >
                            Reserve house
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <ModalCaro active={modalOpen} setActive={setModalOpen}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 overflow-y-auto max-h-[95vh]">
                <ModalHotel/>
                <ModalOptHotel active={modalOpen} setActive={setModalOpen}/>
                </div>
            </ModalCaro>
</div>
    )
}

export default Hotels