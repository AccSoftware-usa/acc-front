'use client'; 

import AboutUs from '@/components/about-us';
import { AnimatedSection } from '@/components/animated-section';
import ContactUs from '@/components/contact-us';
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp';
import { HeroSection } from '@/components/hero-section';
import { Preloader } from '@/components/preloader';
import { Reservations } from '@/components/reservations';
import Testimonials from '@/components/testimonials';
import JoinUsBanner from '@/components/join-us-banner';
// --- Imports de React y Hooks ---
import { useState, useEffect } from 'react';


// --- Componente Principal de la Página ---
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Esta función simula la carga y oculta el preloader
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // 1 seg de delay mínimo para que se vea la animación
    };

    // Comprueba si la página ya cargó
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Si no, espera al evento 'load'
      window.addEventListener('load', handleLoad);
      // Limpia el listener cuando el componente se desmonte
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  return (
    <>
      {/* 1. El Preloader: Se muestra u oculta según el estado 'isLoading' */}
      <Preloader isLoading={isLoading} />
      
      {/* 2. Hero Section: No se anima para que aparezca rápido */}
      <div id="home">
        <HeroSection />
      </div>

      {/* 3. Secciones Animadas: */}
      {/* Envolvemos cada sección con 'AnimatedSection' para el efecto de "fade in" al hacer scroll */}
      
      <AnimatedSection>
        <div id="reservations">
          <Reservations />
        </div>
      </AnimatedSection>
      
      <AnimatedSection>
        <div id="about-us">
          <AboutUs />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection>
        <div id="join-us">
          <JoinUsBanner />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div id="contact-us">
          <ContactUs />
        </div>
      </AnimatedSection>

      <FloatingWhatsAppButton />
    </>
  );
}
