import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa'; // Importamos el icono de WhatsApp

type JoinUsBannerProps = {
  logoSrc?: string;
  logoAlt?: string;
};

export default function JoinUsBanner({
  logoSrc = '/logo_acc.png',
  logoAlt = 'Logo de la empresa',
}: JoinUsBannerProps) {
  
  // 1. Definimos la información de WhatsApp
  const phoneNumber = "+15616982828"; // El número que proporcionaste
  const defaultMessage = "Hola, me gustaría ser parte de su equipo de drivers."; // Mensaje específico para esta sección

  // 2. Codificamos el mensaje para la URL
  const encodedMessage = encodeURIComponent(defaultMessage);

  // 3. Construimos la URL final de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <section className="bg-[#f9fafb]" aria-labelledby="join-us-title">
      <div className="container mx-auto max-w-4xl px-6 py-16 text-center">
        {/* 1. Imagen del Logo */}
        <div className="mx-auto mb-4 flex justify-center">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={120}
            height={120}
            className="rounded-full shadow-md"
          />
        </div>

        {/* 2. Título Principal */}
        <h2
          id="join-us-title"
          className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          ¡Únete a nuestro equipo de drivers!
        </h2>

        {/* 3. Texto de Apoyo */}
        <p className="mb-8 text-lg leading-7 text-gray-700">
          ¡Trabaja con nosotros! Buscamos conductores apasionados por el buen
          servicio. Si eres profesional y quieres crecer con nosotros, este es tu
          lugar.
        </p>

        {/* 4. Llamada a la Acción (CTA) - Ahora es un enlace a WhatsApp */}
        <a
          href={whatsappUrl} // <-- URL de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex // Usamos inline-flex para alinear el icono y el texto
            items-center 
            justify-center 
            gap-2 // Espacio entre el icono y el texto
            rounded-lg 
            bg-brand-orange // <-- Tu color personalizado
            px-8 
            py-3 
            text-lg 
            font-bold 
            text-white 
            shadow-lg 
            transition-all 
            duration-300 
            hover:opacity-90 // Un efecto hover genérico para tu color
            focus:outline-none 
            focus:ring-2 
            focus:ring-brand-orange // Asumiendo que 'brand-orange' está en tu config
            focus:ring-offset-2
          "
        >
          <FaWhatsapp className="h-6 w-6" /> {/* Icono de WhatsApp */}
          Aplicar Ahora
        </a>
      </div>
    </section>
  );
}