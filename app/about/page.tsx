import HeroSection from "@/app/about/Components/HeroSection";
import Navbar from "@/app/Components/Nav";


import Footer from "@/app/Components/Footer";
import AboutUs from "@/app/about/Components/AboutUs";
import MapComponent from "./Components/MapComponent";





export default function AboutUsPage() {
    return (
      <main className="bg-gray-100">
        <Navbar/>
        <HeroSection title="About Us"/>
        <AboutUs/>
        <Footer/>

        <div className="text-center text-gray-600 bg-slate-300 py-4">
          © <a href="https://github.com/Pandario">Pandario</a> 2024
        </div>


      </main>
    );
  }