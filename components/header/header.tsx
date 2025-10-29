// src/components/Header.tsx
'use client';

// --- CAMBIOS DE IMPORTACIÓN ---
import { useState, Fragment } from 'react'; // Fragment es necesario para Transition
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Logo } from './logo/logo';
import { Dialog, Transition } from '@headlessui/react'; // <-- ¡IMPORTADO!

const navLinks = [
  { name: 'Inicio', href: '/#home' },
  { name: 'Sobre Nosotros', href: '/#about-us' },
  { name: 'Contacto', href: '/#contact-us' },
  { name: 'Trabaja con Nosotros', href: '/#join-us' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8">

        {/* 1. Logo */}
        <div className="flex lg:flex-1">
          <Logo />
        </div>

        {/* 2. Botón de Menú Móvil */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* 3. Enlaces de Navegación (Desktop) */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-semibold leading-6 text-brand-dark hover:text-brand-orange transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 4. BOTÓN DE RESERVA (Desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/#reservations"
            className="rounded-md bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange transition-transform hover:scale-105"
          >
            Reserva tu transporte
          </Link>
        </div>
      </nav>

      {/* --- CAMBIO: Panel de Menú Móvil AHORA CON TRANSICIÓN --- */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>

          {/* Fondo/Overlay (Animación de Opacidad) */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-50 bg-black bg-opacity-25" />
          </Transition.Child>

          {/* Panel del Menú (Animación de Deslizamiento) */}
          <div className="fixed inset-0 z-50 flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full" // Empieza fuera de la pantalla (derecha)
              enterTo="translate-x-0"     // Termina en la pantalla
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"   // Empieza en la pantalla
              leaveTo="translate-x-full"  // Termina fuera de la pantalla (derecha)
            >
              <Dialog.Panel className="w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                <div className="flex items-center justify-between">
                  <Logo />
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-dark hover:bg-gray-50"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                    {/* 5. BOTÓN DE RESERVA (Móvil) */}
                    <div className="py-6">
                      <Link
                        href="/#reservations"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-brand-orange hover:bg-brand-orange/90"
                      >
                        Reserva tu transporte
                      </Link>
                    </div>
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
}

