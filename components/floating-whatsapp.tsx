// Asumiendo que este es un componente de React/Next.js
// No olvides importar tu WhatsAppIcon si está en otro archivo
// import { WhatsAppIcon } from './WhatsAppIcon'; 

import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsAppButton() { // O como se llame tu componente
  
  // 1. Define tu número y el mensaje predeterminado
  const phoneNumber = "+15616982828";
  const defaultMessage = "Hola, me gustaría más información sobre sus servicios de transporte.";

  // 2. Codifica el mensaje para que sea seguro en una URL
  const encodedMessage = encodeURIComponent(defaultMessage);

  // 3. Construye la URL final
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    /* 4. Botón flotante de WhatsApp */
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl} // <-- AQUÍ USAMOS LA VARIABLE
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white 
                   p-4 rounded-full shadow-lg 
                   flex items-center justify-center 
                   transition-transform duration-200 hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        {/* Usamos el componente de icono separado */}
        {/* <WhatsAppIcon />  <-- Asegúrate de que este componente exista y esté importado */}
        {/* Si no lo tienes, puedes poner un SVG o un ícono de una librería: */}
        <FaWhatsapp className="h-8 w-8" /> 
      </a>
    </div>
  );
}

// Nota: Si <WhatsAppIcon /> es tu propio componente, 
// asegúrate de que esté definido o importado.
// Por ejemplo, si lo tienes en el mismo archivo:
// const WhatsAppIcon = () => (
//   <svg ... (el código del SVG de arriba) ... />
// );