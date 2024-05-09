import Image from "next/image";
import Navbar from "./Components/Nav";
import Hotels from "./Main/Hotels";
import HeroSection from "./Components/HeroSection";
import Fishing from "./Main/Fishing";
import Restaurants from "./Main/Restaurants";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main >
      <HeroSection title="Virtual hotel"/>
      <Navbar/>
      <Hotels/>
      <Fishing/>
      <Restaurants/>
      <Footer/>
      <div className="text-center text-gray-600 bg-slate-300 py-4">
        © <a href="https://github.com/Pandario" className="hover:text-indigo-700">Pandario</a> 2024
      </div>
      
    </main>
  );
}
