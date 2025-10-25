// src/app/layout.tsx
import type { Metadata } from "next";
// 1. Importamos 'localFont' en lugar de 'Inter'
import localFont from 'next/font/local'; 
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";




// 2. Cargamos tus fuentes locales desde la carpeta 'src/fonts'
const humanist = localFont({
  src: '../fonts/Humanist521BT.ttf',
  display: 'swap',
  variable: '--font-humanist', // La llamaremos 'humanist'
});

const arista = localFont({
  src: '../fonts/Arista2.0 Alternate light.ttf',
  display: 'swap',
  variable: '--font-arista', // La llamaremos 'arista'
});

export const metadata: Metadata = {
  title: "Alliance Cars Company - Transporte Confiable",
  description: "Tu traslado, a tiempo y sin complicaciones en West Palm Beach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* 3. Aplicamos AMBAS variables al body */}
      <body 
        className={`${humanist.variable} ${arista.variable} font-sans flex flex-col min-h-screen`}    >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}