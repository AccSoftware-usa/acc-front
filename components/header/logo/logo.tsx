// src/components/Logo.tsx
import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Alliance Car's Company</span>
      <Image
        className="h-10 w-auto" // Ajusta la altura (h-10) según sea necesario
        
        src="/main-log-acc.png" 
        
        alt="Logo de Alliance Car's Company"
        width={150} // Pon un ancho aproximado
        height={40} // Pon un alto aproximado
        priority // Carga el logo rápido
      />
    </Link>
  );
}