import Image from "next/image";
import topImage from '@/public/img/Main/MainHotel.jpg'

interface HeroSectionProps {
    title: string;
}


const HeroSection: React.FC<HeroSectionProps> = ({title}) => {
    return (
        <div className="flex relative flex-col w-full lg:h-[48rem] h-96 t" >
            
            <div className="">
                <Image
                    src={topImage}
                    alt="Cafe image"
                    width={1200}
                    height={768}
                    className="absolute w-full h-full top-0 left-0 object-cover"

                />

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="text-center ">
                        <h1 className="text-4xl lg:text-6xl  font-bold mb-10  text-orange-600">Our Hotel</h1>
                        <p className="text-xl lg:text-3xl text-orange-600  font-bold">{title}</p>
          
                </div>
      </div>
            
            </div>

            
            
        </div>
    );
  };

  export default HeroSection;
