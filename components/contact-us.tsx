import React from 'react';
import { MdOutlinePhone, MdOutlineEmail, MdLocationPin } from 'react-icons/md';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const socialLinks = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/AllianceCarsCompanyOficial',
        icon: FaFacebook
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/alliancecarscompany/',
        icon: FaInstagram
    },
];

const ContactUs = () => {
    return (
        <section id="contacto" className="bg-white">
            {/* Grid de 2 columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Columna 1: Información de Contacto */}
                <div className="relative px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-xl lg:mx-0">

                        {/* --- CAMBIO AQUÍ: Usando tu color de marca --- */}
                        <h2 className="text-3xl font-bold tracking-tight text-brand-orange">
                            Ponte en contacto
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-700">
                            Estamos listos para llevarte a tu destino. Llena el formulario de
                            reserva o contáctanos directamente.
                        </p>

                        <dl className="mt-10 space-y-6 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Dirección</span>
                                    {/* --- CAMBIO AQUÍ: Usando tu color de marca --- */}
                                    <MdLocationPin className="h-7 w-6 text-brand-orange" aria-hidden="true" />
                                </dt>
                                <dd>
                                    West Palm Beach, FL
                                    <br />
                                    (Zona de cobertura: Miami a Fort Pierce)
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Teléfono</span>
                                    {/* --- CAMBIO AQUÍ: Usando tu color de marca --- */}
                                    <MdOutlinePhone className="h-7 w-6 text-brand-orange" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a href="tel:+1234567890" className="hover:text-gray-900">
                                        +1 (234) 567-890
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Correo</span>
                                    {/* --- CAMBIO AQUÍ: Usando tu color de marca --- */}
                                    <MdOutlineEmail className="h-7 w-6 text-brand-orange" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a href="mailto:contacto@acc.com" className="hover:text-gray-900">
                                        contacto@acc.com
                                    </a>
                                </dd>
                            </div>
                        </dl>

                        {/* Iconos de redes sociales */}
                        <div className="mt-10 flex gap-x-6">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    // --- CAMBIO AQUÍ: Color base es naranja y se atenúa en hover ---
                                    className="text-brand-orange hover:opacity-80 transition-opacity"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- COLUMNA 2: EL MAPA (IFRAME) CON ESTILO (SIN CAMBIOS) --- */}
                <div className="relative px-6 py-24 sm:py-32 lg:px-8 flex items-center">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91060.03242270035!2d-80.12423184179688!3d26.713501000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5d5e5338169%3A0x60d2703878604368!2sWest%20Palm%20Beach%2C%20FL%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sco!4v1730000000000!5m2!1ses-419!2sco" // <-- Reemplaza con tu SRC de Google Maps
                        className="w-full h-[500px] min-h-[400px] rounded-xl shadow-2xl"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;

/*
**Recordatorio para el mapa (importante):**
1. Ve a Google Maps.
2. Busca "West Palm Beach, FL" (o tu dirección exacta).
3. Haz clic en "Compartir".
4. Elige la pestaña "Insertar un mapa".
5. Copia el enlace `src` (solo la URL que está dentro de `src="..."`).
6. Pega esa URL en el `src` de mi código de arriba.
*/