import React from 'react';
// 1. Importamos el icono de comillas
import { FaQuoteRight } from 'react-icons/fa';

// Datos de ejemplo para los testimonios (sin cambios)
const testimonials = [
  {
    body: 'El servicio fue increíblemente puntual. El conductor fue muy profesional y el auto estaba impecable. Justo lo que necesitaba para llegar al aeropuerto sin estrés.',
    author: {
      name: 'Maria Gonzalez',
      location: 'Miami, FL',
    },
  },
  {
    body: 'Usamos ACC para un traslado corporativo y todo salió perfecto. Coordinación fácil y un servicio de primera. Totalmente recomendados.',
    author: {
      name: 'David Chen',
      location: 'Fort Lauderdale, FL',
    },
  },
  {
    body: '¡El mejor transporte! "Pa’ lante es pa’ ya" no es solo un eslogan, es la verdad. Llegaron a tiempo y el viaje fue súper cómodo. Gracias.',
    author: {
      name: 'Jessica Smith',
      location: 'West Palm Beach, FL',
    },
  },
];

const Testimonials = () => {
  return (
    // Mantenemos el fondo gris claro para la sección
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Título (sin cambios) */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-6 text-lg leading-8 text-brand-orange">
            La confianza y puntualidad son nuestra prioridad.
          </p>
        </div>
        
        {/* Grid de testimonios (aquí están los cambios) */}
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              
              // --- LA TARJETA MEJORADA ---
              <div 
                key={testimonial.author.name}
                // 1. 'relative' para poder posicionar la comilla
                // 2. 'overflow-hidden' para recortar la comilla que se sale
                // 3. 'shadow-lg' para darle más profundidad que 'shadow-sm'
                className="relative flex flex-col rounded-2xl bg-white p-8 shadow-lg overflow-hidden"
              >
                {/* 2. LA COMILLA DE FONDO */}
                <FaQuoteRight 
                  className="absolute -top-4 -right-4 h-32 w-32 text-gray-100" 
                  aria-hidden="true" 
                />
                
                {/* 3. 'relative' para que el texto se ponga SOBRE la comilla */}
                <div className="relative flex-grow">
                  <blockquote className="text-lg leading-8 text-gray-700">
                    <p>“{testimonial.body}”</p>
                  </blockquote>
                </div>
                
                <figcaption className="relative mt-8 text-base">
                  <div className="font-semibold text-brand-orange">
                    {testimonial.author.name}
                  </div>
                  <div className="text-gray-600">
                    {testimonial.author.location}
                  </div>
                </figcaption>
              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;