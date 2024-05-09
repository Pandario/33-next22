'use client'
import Image from "next/image"
import RestaurantMain from '@/public/img/Main/MainRestaurant.jpg'
import { useState } from "react"
import ModalCaro from "./components/ModalCaro";
import ModalOptRestaurant from "./components/ModalOptRestaurant";
import ModalRestaurant from "./components/ModalRestaurant";

 function Restaurants(): JSX.Element{
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    function toggleModal(): void {
        setModalOpen(!modalOpen);
    }

    return (
        <div className="lg:pt-10 mx-4 lg:my-6 my-2">

            <div className="flex justify-center ">
            
                <div className="grid grid-cols-1 lg:grid-cols-2   mx-auto">
                    <div className="items-center order-first lg:order-none justify-center flex relative ">

                        <div className="relative">
                            <Image
                                src={RestaurantMain}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                                className="rounded-lg "
                            />
       
                        </div>
                    </div>

                    <div className="flex flex-col  p-4 my-1 shadow-lg rounded-lg">

                        <h1 className="text-3xl font-bold mb-4 text-center">Our Amaizing restaurants {'!'}</h1>
                        <div className="flex justify-center my-8">
                            <div className="w-36 h-2 bg-orange-500  rounded-full shadow-lg"></div>
                        </div>
                        <h3 className="text-xl mb-2">
                            Welcome to our Restaurants, where we blend 
                            traditional flavors with a modern twist.
                        </h3>
                        <h5 className="text-xl mb-2">
                            Our mission is to offer a memorable dining experience 
                            with dishes crafted from locally sourced ingredients.
                        </h5>
                        <h5 className="text-xl mb-2">
                            Cozy ambiance, friendly staff, and innovative menu 
                            create the perfect setting for any occasion.
                        </h5>
                        <h5 className="text-xl mb-4"> 
                            Join us for a journey of culinary excellence, 
                            where every bite tells a story of passion and creativity.  
                        </h5>

                        <div className="py-2 text-center">
                            <button
                            className="text-3xl px-4 py-3 bg-orange-300 text-black font-semibold rounded-lg shadow-md hover:bg-green-500 transition-colors duration-200"
                            onClick={toggleModal}
                            >
                            Reserve Restaurants
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ModalCaro active={modalOpen} setActive={setModalOpen}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 overflow-y-auto max-h-[95vh]">
                <ModalRestaurant/>
                <ModalOptRestaurant active={modalOpen} setActive={setModalOpen}/>
                </div>
            </ModalCaro>
</div>
    )
}

export default Restaurants