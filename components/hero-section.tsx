import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div
        // -----------------------------------------------------------------
        // --- CAMBIOS AQUÍ (Contenedor Principal) ---
        // -----------------------------------------------------------------
        // 1. (Móvil - base): Centramos todo y añadimos padding horizontal
        // 2. (Desktop - sm:): Alineamos a la izquierda y ponemos el padding
        // -----------------------------------------------------------------
        className="relative z-10 flex h-full flex-col justify-center
                   items-center text-center px-4
                   sm:items-start sm:text-left sm:px-0 sm:pl-16 md:pl-24 lg:pl-32"
        // Ya no necesitas la clase "hero-container"
      >
        <div className="max-w-3xl">
          <div className="mb-6"> {/* Agregamos un div para el espaciado inferior */}
            <Image
              src="/logo_acc_white.png" // Ruta a tu logo desde la carpeta 'public'
              alt="Logo de la empresa"
              width={200} // Ajusta el ancho según tus necesidades
              height={100} // Ajusta el alto según tus necesidades
              className="mx-auto sm:mx-0" // Centra el logo en móvil, alinea a la izquierda en desktop
            />
          </div>

          <h1
            // -----------------------------------------------------------------
            // --- CAMBIOS AQUÍ (Título) ---
            // -----------------------------------------------------------------
            // 1. (Móvil - base): Texto más pequeño
            // 2. (Desktop - sm:): Texto más grande
            // -----------------------------------------------------------------
            className="text-4xl leading-tight font-bold text-white mb-6 drop-shadow-md
                       sm:text-5xl sm:leading-tight"
            // Ya no necesitas la clase "hero-text"
          >
            Tu traslado, a tiempo y sin <br />
            complicaciones.
          </h1>

            <Link
              href="/#reservations"
              // 1. Quita "legacyBehavior"
              // 2. Mueve todas las props de la "<a>" aquí
              className="inline-flex items-center justify-center self-start max-w-max bg-[#F97316] hover:bg-[#ea680a] text-white text-lg font-semibold px-8 py-3 rounded-md shadow-lg transition-transform duration-200 hover:scale-105"
              aria-label="Reserva tu transporte"
            >
              {/* 3. Deja solo el texto (sin la <a>) */}
              Reserva tu transporte
            </Link>

          <p
            // -----------------------------------------------------------------
            // --- CAMBIOS AQUÍ (Subtítulo) ---
            // -----------------------------------------------------------------
            // 1. (Móvil - base): Texto más pequeño y con margen superior
            // 2. (Desktop - sm:): Texto más grande
            // -----------------------------------------------------------------
            className="text-xl italic text-[#d4c5af] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] mt-6
                       sm:text-2xl"
            // Ya no necesitas la clase "hero-subtext"
          >
            Pa’ lante es pa’, ya
          </p>
        </div>
      </div>
    </div>
  );
}