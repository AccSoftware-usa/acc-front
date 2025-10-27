"use client";

import {
    MapPinIcon,
    CalendarIcon,
    ClockIcon,
    UserIcon,
    ChevronDownIcon,
    UserGroupIcon,
    BriefcaseIcon,
} from "@heroicons/react/24/solid";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import type { ComponentType, SVGProps, ReactNode } from "react";

// Reutilizable para los campos del formulario
type FormFieldProps = {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: string;
    children: ReactNode;
};

function FormField({ icon: Icon, label, children }: FormFieldProps) {
    return (
        <div>
            <label
                htmlFor={label}
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
                {label}
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                {children}
            </div>
        </div>
    );
}

  // 1. Define tu número y el mensaje predeterminado
  const phoneNumber = "+15616982828";
  const defaultMessage = "Hola, me gustaría más información sobre sus servicios de transporte.";

  // 2. Codifica el mensaje para que sea seguro en una URL
  const encodedMessage = encodeURIComponent(defaultMessage);

  // 3. Construye la URL final
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

export function Reservations() {
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const telefono = "+15616982828";
        const form = e.currentTarget;
        const formData = new FormData(form);

        const recogida = formData.get("recogida") as string;
        const destino = formData.get("destino") as string;
        const fecha = formData.get("fecha") as string;
        const hora = formData.get("hora") as string;
        const nombre = formData.get("nombre") as string;
        const vehiculo = formData.get("vehiculo") as string;
        const pasajeros = formData.get("pasajeros") as string;
        const equipaje = formData.get("equipaje") as string;

        const mensaje = `¡Hola! Me gustaría solicitar una reserva:

*Nombre:* ${nombre}
*Punto de Recogida:* ${recogida}
*Punto de Destino:* ${destino}
*Fecha:* ${fecha}
*Hora:* ${hora}
*Tipo de Vehículo:* ${vehiculo}
*Pasajeros:* ${pasajeros}
*Equipaje:* ${equipaje}

¡Quedo atento a la confirmación, gracias!`;

        const mensajeCodificado = encodeURIComponent(mensaje);
        const urlWhatsapp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

        // Abrir WhatsApp
        window.open(urlWhatsapp, "_blank", "noopener,noreferrer");

        // Limpiar formulario
        form.reset();

        // Mostrar popup de agradecimiento
        setShowPopup(true);

        // Cerrar automáticamente el popup después de 4 segundos
        setTimeout(() => setShowPopup(false), 4000);
    };

    // Calcular fecha máxima permitida (hoy)
    const today = new Date().toISOString().split("T")[0];

    return (
        <section id="reservas" className="bg-gray-50 dark:bg-brand-dark py-20 sm:py-28">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Título */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-display font-bold tracking-tight text-brand-dark dark:text-white sm:text-4xl">
                        Reserva tu transporte
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Completa el formulario y te contactaremos a la brevedad.
                    </p>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
                        <FormField label="Punto de Recogida" icon={MapPinIcon}>
                            <input
                                type="text"
                                name="recogida"
                                required
                                placeholder="Ej: Aeropuerto Miami (MIA)"
                                className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 
                           placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F97316] sm:text-sm 
                           sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600"
                            />
                        </FormField>

                        <FormField label="Punto de Destino" icon={MapPinIcon}>
                            <input
                                type="text"
                                name="destino"
                                required
                                placeholder="Ej: West Palm Beach"
                                className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 
                           placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F97316] sm:text-sm 
                           sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600"
                            />
                        </FormField>
                        <FormField label="Fecha" icon={CalendarIcon}>
                            <input
                                type="date"
                                name="fecha"
                                id="Fecha"
                                required
                                min={new Date().toISOString().split("T")[0]} // <-- Evita fechas pasadas
                                className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 
      ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
      focus:ring-2 focus:ring-inset focus:ring-[#F97316] sm:text-sm sm:leading-6 
      dark:bg-gray-700 dark:text-white dark:ring-gray-600"
                            />
                        </FormField>


                        <FormField label="Hora" icon={ClockIcon}>
                            <input
                                type="time"
                                name="hora"
                                required
                                className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 
                           placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F97316] sm:text-sm 
                           sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600"
                            />
                        </FormField>

                        <FormField label="Tu Nombre" icon={UserIcon}>
                            <input
                                type="text"
                                name="nombre"
                                required
                                placeholder="Nombre y Apellido"
                                className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 
                           placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F97316] sm:text-sm 
                           sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600"
                            />
                        </FormField>

                        <FormField label="Tipo de Vehículo" icon={ChevronDownIcon}>
                            <select
                                name="vehiculo"
                                required
                                className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 
                           focus:ring-2 focus:ring-inset focus:ring-[#F97316] sm:text-sm sm:leading-6 
                           dark:bg-gray-700 dark:text-white dark:ring-gray-600"
                            >
                                <option value="">Selecciona un vehículo</option>
                                <option value="sedan">Sedan</option>
                                <option value="suv">Camioneta (SUV)</option>
                                <option value="van">Van</option>
                            </select>
                        </FormField>

                        <FormField label="Número de Pasajeros" icon={UserGroupIcon}>
                            <input
                                type="number"
                                name="pasajeros"
                                min="1"
                                required
                                placeholder="Ej: 2"
                                className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 
                           placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F97316] sm:text-sm 
                           sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600"
                            />
                        </FormField>

                        <FormField label="¿Lleva equipaje?" icon={BriefcaseIcon}>
                            <select
                                name="equipaje"
                                required
                                className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 
                           focus:ring-2 focus:ring-inset focus:ring-[#F97316] sm:text-sm sm:leading-6 
                           dark:bg-gray-700 dark:text-white dark:ring-gray-600"
                            >
                                <option value="">Seleccione una opción</option>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>
                        </FormField>
                    </div>

                    {/* Botón */}
                    <div className="mt-10 text-center">
                        <button
                            type="submit"
                            className="w-full sm:w-auto rounded-md bg-[#F97316] hover:bg-[#ea680a] px-10 py-3.5 
                         text-base font-semibold text-white shadow-lg transition-transform duration-200 
                         hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                         focus-visible:outline-[#F97316]"
                        >
                            Solicitar Reserva
                        </button>
                    </div>
                </form>

                {/* Popup de Agradecimiento */}
                {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                                ¡Gracias por tu reserva! 🙌
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Nos pondremos en contacto contigo pronto para confirmarla.
                            </p>
                        </div>
                    </div>
                )}

                {/* Contacto rápido */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 dark:text-gray-300">
                        ¿Prefieres un contacto más directo?
                    </p>
                    <Link
                        href={whatsappUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-x-2 rounded-full bg-green-600 px-6 py-2.5 
                       font-semibold text-white shadow-md transition-transform duration-200 hover:scale-105 
                       hover:bg-green-700"
                    >
                        <FaWhatsapp className="h-5 w-5" />
                        Chatea por WhatsApp
                    </Link>
                </div>
            </div>
        </section>
    );
}
