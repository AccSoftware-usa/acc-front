'use client'; // Asegura que este componente se renderice en el cliente

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // <-- ¡Importamos el icono de aquí!

// --- Componente Icono de WhatsApp (Usando react-icons) ---
export const WhatsAppIcon = () => (
  // El tamaño y color se controlan con las clases de Tailwind en el componente padre
  <FaWhatsapp className="h-8 w-8" /> 
);
