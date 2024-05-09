'use client'
import Image from "next/image"
import FishingMain from '@/public/img/Main/MainFishing.jpg'
import { useState } from "react"
import ModalCaro from "./components/ModalCaro";
import ModalFishing from "./components/ModalFishing";
import ModalOptFishing from "./components/ModalOptFishing";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Fishing(): JSX.Element{

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    function toggleModal(): void {
        setModalOpen(!modalOpen);
    }

    const images: string[] = [
        '/img/Main/mainFishing/MainFishing1.jpg',
        '/img/Main/mainFishing/MainFishing2.jpg',
        '/img/Main/mainFishing/MainFishing3.jpg',
        '/img/Main/mainFishing/MainFishing4.jpg',

      ];

      const [currentIndex, setCurrentIndex] = useState<number>(0);

      const goPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
      };
    
      const goNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
      };


    return (
        <div className="lg:pt-10 mx-4 lg:my-6 my-2">

            <div className="flex justify-center ">
            
                <div className="grid grid-cols-1 lg:grid-cols-2   mx-auto">


                    <div className="flex flex-col  p-4 my-1 shadow-lg rounded-lg">

                        <h1 className="text-3xl font-bold mb-4 text-center">Our fishing lake {'!'}</h1>
                        <div className="flex justify-center my-8">
                            <div className="w-36 h-2 bg-orange-500 rounded-full shadow-lg"></div>
                        </div>
                        <h3 className="text-xl mb-2">
                        Cast away at Lake Tranquility, where the gentle ripple 
    of water merges with the thrill of the catch.
                        </h3>
                        <h5 className="text-xl mb-2">
                        Our goal is to provide an exceptional angling adventure 
    with boats equipped for the avid fisher&apos;s every need.
                        </h5>
                        <h5 className="text-xl mb-2">
                        Pristine waters, abundant fish, and a fleet of boats 
    await to deliver an angler&apos;s paradise.
                        </h5>
                        <h5 className="text-xl mb-4"> 
                        Embark with us for a day of aquatic discovery, 
    where every cast is an opportunity for a new story.   
                        </h5>

                        <div className="py-2 text-center">
                            <button
                                className="text-3xl px-4 py-3 bg-orange-300 text-black font-semibold rounded-lg shadow-md hover:bg-green-500 transition-colors duration-200"
                                onClick={toggleModal}
                            >
                            Reserve boat
                            </button>
                        </div>
                    </div>

                    <div className="items-center order-first lg:order-none justify-center flex relative ">

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
                </div>
            </div>

            <ModalCaro active={modalOpen} setActive={setModalOpen}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 overflow-y-auto max-h-[95vh]">
                <ModalFishing/>
                <ModalOptFishing active={modalOpen} setActive={setModalOpen}/>
                </div>
            </ModalCaro>
</div>
    )
}

export default Fishing