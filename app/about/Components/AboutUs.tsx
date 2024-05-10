'use client'


import MapComponent from "./MapComponent";
export default function AboutUs() {
    

    return (
        <div className="pt-10 m-4">

            <div className="flex justify-center ">
            
                <div className="grid grid-cols-1 lg:grid-cols-2   mx-auto">

                    <div className="flex flex-col  p-4 my-1 shadow-lg rounded-lg ">

                    <h1 className="text-3xl font-bold mb-4 text-center">That&apos;s about us page {':)'}</h1>
                    <h3 className="text-xl mb-2">So I make websites. This one have working backend as well.</h3>
                    <h5 className="text-xl mb-2">Here we have: Responsive nextjs website, typescript, tailwind, grid, nice navbar  
                    {' (especially in mobile version)'}, implemented video, carousels on main page, broken pages, googlemapAPI and etc.</h5>
                    <h5 className="text-xl mb-2">Contact us form plus reservations - all real. 
                        They connected to really MongoDB, separate ones so it would be used in backend.</h5>
                        <h5 className="text-xl mb-4"> 
                            This is sort of projects I was working before.</h5> 
                        
                        <h5 className="text-xl mb-4">Why I left link on broken page? Cuz nextjs gives a tool to make unique
                            broken pages and I prefer to have it custom one, when people make mistakes in address line.
                          </h5>
                    </div>

                    <div className="flex flex-col  p-4 my-1 shadow-lg rounded-lg">

                        
                        <MapComponent/>

                    </div>
                </div>
            </div>
</div>
    )
}