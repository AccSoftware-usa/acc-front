// src/components/Header.tsx
'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Logo } from './logo/logo';

const navLinks = [
  { name: 'Inicio', href: '/#home' },
  { name: 'Sobre Nosotros', href: '/#about-us' },
  { name: 'Contacto', href: '/#contact-us' },
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

        {/* 4. BOTÓN DE RESERVA (Desktop) -- ¡AQUÍ ESTÁ! */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            href="/#reservations" 
            className="rounded-md bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange transition-transform hover:scale-105"
          >
            Reserva tu transporte
          </Link>
        </div>
      </nav>

      {/* --- Panel de Menú Móvil --- */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black bg-opacity-25" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            
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
                {/* 5. BOTÓN DE RESERVA (Móvil) -- ¡AQUÍ ESTÁ! */}
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
          </div>
        </div>
      )}
    </header>
  );
}