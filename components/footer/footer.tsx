// src/components/Footer.tsx
import Link from 'next/link';

// Componente para los iconos (usaremos SVGs simples por ahora)
// Puedes reemplazar esto con una librería como 'react-icons' si lo prefieres
const FacebookIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c-2.43 0-2.784.011-3.808.06-1.064.049-1.791.218-2.427.465a4.902 4.902 0 00-1.772 1.153 4.902 4.902 0 00-1.153 1.772c-.247.636-.416 1.363-.465 2.427C2.011 9.531 2 9.885 2 12.315s.011 2.784.06 3.808c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.247 1.363.416 2.427.465 1.024.049 1.378.06 3.808.06s2.784-.011 3.808-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.636.416-1.363.465-2.427.049-1.024.06-1.378.06-3.808s-.011-2.784-.06-3.808c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772A4.902 4.902 0 0018.522 2.525c-.636-.247-1.363-.416-2.427-.465C15.099 2.011 14.745 2 12.315 2zM12 7.043c-2.748 0-4.975 2.227-4.975 4.975S9.252 17 12 17s4.975-2.227 4.975-4.975S14.748 7.043 12 7.043zM12 15.111c-1.73 0-3.111-1.38-3.111-3.111s1.38-3.111 3.111-3.111 3.111 1.38 3.111 3.111-1.38 3.111-3.111 3.111zM16.965 7.008a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
  </svg>
);


export function Footer() {
  const email = "correo@tudominio.com"; // Reemplaza esto cuando tengas el email final
  const phone = "+1 (786) 580-2979"; // Reemplaza esto
  const facebookUrl = "https://www.facebook.com/AllianceCarsCompanyOficial";
  const instagramUrl = "https://www.instagram.com/alliancecarscompany/";
  
  return (
    <footer className="bg-brand-dark text-gray-400">
        <div className="container mx-auto px-6 py-12 lg:px-8">
            <div className="md:flex md:justify-between">
          
          {/* 1. Información de la Empresa y Lema */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link href="/" className="text-2xl font-bold text-white">
              Alliance Cars Company
            </Link>
            <p className="mt-2 text-lg italic text-brand-beige font-display">
                "Pa’ lante es pa’ ya"    
            </p>
          </div>

          {/* 2. Enlaces Rápidos (opcional pero bueno para UX) */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-sm font-semibold uppercase text-white">Navegación</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/#home" className="hover:text-white">Inicio</Link></li>
              <li><Link href="/#reservations" className="hover:text-white">Reservas</Link></li>
              <li><Link href="/#about-us" className="hover:text-white">Sobre Nosotros</Link></li>
              <li><Link href="/#contact-us" className="hover:text-white">Contacto</Link></li>
              <li><Link href="/#join-us" className="hover:text-white">Trabaja con Nosotros</Link></li>
            </ul>
          </div>
          
          {/* 3. Información de Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-white">Contacto</h3>
            <ul className="mt-4 space-y-2">
              <li><a href={`mailto:${email}`} className="hover:text-white">{email}</a></li>
              <li><a href={`tel:${phone}`} className="hover:text-white">{phone}</a></li>
              <li>West Palm Beach, FL, USA</li>
            </ul>
          </div>

        </div>

        {/* 4. Línea divisoria, Redes Sociales y Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-5 text-center md:order-1">
            &copy; {new Date().getFullYear()} Alliance Cars Company. Todos los derechos reservados.
          </p>
          <div className="flex justify-center space-x-6 md:order-2 mt-4 md:mt-0">
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <FacebookIcon />
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <InstagramIcon />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}