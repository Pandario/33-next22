import Link from "next/link";
import Navbar from "./Components/Nav";
import Footer from "./Components/Footer";

export default function NotFound() {
    return (
      <div className="main">
          <Navbar/>
            <div className="flex flex-col justify-center items-center mt-60 ">

                            <div className=" justify-center text-center my-10   rounded bg-blue-200 opacity-65  text-gray-800 text-3xl   font-semibold  ">
                
                <p 
                    className="  "
                    >This is not-found page. </p>
                                    <p 
                    className=""
                    >Why not to return to main page?</p>
            </div>

            <Link 
                    href='/' 
                    className=" py-2 text-center justify-center "
                    >
                        <button 
                            className="text-3xl px-4 py-3 my-10 bg-green-200 opacity-65 hover:bg-gray-700 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded hover:opacity-90"
                        >
                            Main page
                        </button>
                </Link>
            </div>

                
                
                    <Footer/>
                <div className="text-center text-gray-600 bg-slate-300 py-4">
        © <a href="https://github.com/Pandario" className="hover:text-indigo-700">Pandario</a> 2024
      </div>


      </div>
    )
  }