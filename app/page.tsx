import Image from "next/image";
import { HeroSection } from '@/components/hero-section';
import { Reservations } from "@/components/reservations";
import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Testimonials from "@/components/testimonials";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Renderiza tu nueva sección de bienvenida */}
      <div id="home">
        <HeroSection />
      </div>
      <div id="reservations">
        <Reservations />
      </div>      
      <div id="about-us">
        <AboutUs />
      </div>
      <Testimonials />
      <div id="contact-us">
        <ContactUs />
      </div>
      {/* Botón flotante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50"> {/* Fija la posición en la parte inferior derecha */}
        <Link
          href="https://wa.me/TUNUMERO" // <-- ¡IMPORTANTE! REEMPLAZA CON TU NÚMERO DE WHATSAPP (código de país + número, sin signos ni espacios)
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white 
                     p-4 rounded-full shadow-lg 
                     flex items-center justify-center 
                     transition-transform duration-200 hover:scale-110" // Clases para estilo redondo, sombra y efecto hover
          aria-label="Contactar por WhatsApp"
        >
          <FaWhatsapp className="h-8 w-8" /> {/* Icono de WhatsApp más grande */}
        </Link>
      </div>
    </>
  );
}
