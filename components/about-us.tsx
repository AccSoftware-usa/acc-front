import React from 'react';
// Importamos los iconos que usaremos para las tarjetas
import { FaCarSide, FaRegHandshake, FaCheckCircle } from 'react-icons/fa';
// Importamos el componente Image de Next.js para la imagen de fondo
import Image from 'next/image';

// Definimos los beneficios/características.
// Esto facilita la creación de las tarjetas.
const features = [
  {
    name: 'Seguridad y Confort',
    description: 'Viaja con la tranquilidad de que llegarás a tu destino de forma segura y en vehículos cómodos y modernos.',
    icon: FaCarSide,
    // ¡Añadida la URL de la imagen para esta tarjeta!
    imageSrc: '/security-card.png', // Reemplaza con la URL de la imagen que te generé
  },
  {
    name: 'Atención Personalizada',
    description: 'Nos adaptamos a tus necesidades. Cada cliente es único y nuestro servicio de transporte también lo es.',
    icon: FaRegHandshake,
    // ¡Añadida la URL de la imagen para esta tarjeta!
    imageSrc: '/atention-card.png', // Reemplaza con la URL de la imagen que te generé
  },
  {
    name: 'Experiencia Garantizada',
    description: 'Conductores profesionales y un equipo logístico que aseguran puntualidad y eficiencia en cada trayecto.',
    icon: FaCheckCircle,
    // ¡Añadida la URL de la imagen para esta tarjeta!
    imageSrc: '/expirience-card.png', // Reemplaza con la URL de la imagen que te generé
  },
];

const AboutUs = () => {
  return (
    // 'id' para la navegación. 
    // Usamos 'bg-white' como base para la sección de tarjetas.
    <section id="sobre-nosotros" className="bg-white">

      {/* --- PARTE 1: HERO DE "SOBRE NOSOTROS" --- */}
      <div className="relative bg-gray-900">
        {/* Imagen de Fondo */}
        <Image
          src="/skyline-westpalmbeach-florida.avif" // <-- CAMBIA ESTO por tu imagen
          alt="Vistas de la ciudad"
          className="opacity-40 object-cover object-center" // <-- ARREGLADO          priority
          fill
        />

        {/* Contenedor del texto (se superpone a la imagen) */}
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center sm:py-32 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sobre Nosotros
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-200">
            Somos una empresa de transporte confiable y puntual, enfocada en
            ofrecer una experiencia cómoda y segura en cada trayecto.
          </p>
          <p className="mt-8 text-2xl font-semibold italic text-brand-orange">
            “Pa’ lante es pa’ ya”
          </p>
        </div>
      </div>

      {/* --- PARTE 2: TARJETAS DE BENEFICIOS --- */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">

        {/* Título para la sección de tarjetas */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h3 className="text-base font-semibold leading-7 text-brand-orange">
            NUESTRA PROMESA
          </h3>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tu experiencia es la prioridad
          </p>
        </div>

        {/* Grid de 3 Columnas para las tarjetas */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">

            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col rounded-2xl bg-gray-50 p-0 shadow-sm 
                           hover:shadow-lg transition-shadow duration-300 overflow-hidden" // Agregado 'overflow-hidden' para que la imagen se adapte bien a las esquinas redondeadas
              >
                {/* Nueva sección: Imagen de la tarjeta */}
                <div className="relative w-full h-48"> {/* Ajusta el 'h-48' para controlar la altura de la imagen */}
                  <Image
                    src={feature.imageSrc}
                    alt={feature.name}
                    className="rounded-t-2xl object-cover" // <-- ARREGLADO
                    fill
                  />
                </div>

                <div className="p-8"> {/* Contenedor para el texto de la tarjeta */}
                  {/* Icono y Título */}
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-8 w-8 flex-none text-brand-orange"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  {/* Descripción */}
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              </div>
            ))}

          </dl>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;