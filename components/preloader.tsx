'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'; // <-- 1. Importamos 'Image'

// --- El componente CarIcon (SVG) se ha eliminado ---

// --- Componente Preloader (Versión Moderna con Logo) ---
export function Preloader({ isLoading }: { isLoading: boolean }) {
  return (
    <motion.div
      id="preloader"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        if (!isLoading) {
          const preloader = document.getElementById('preloader');
          if (preloader) preloader.style.display = 'none';
        }
      }}
    >
      <div className="relative flex items-center justify-center w-32 h-32">
        {/* Círculo de fondo (estático) */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="#f3f4f6" // gray-100
            strokeWidth="8"
            fill="transparent"
          />
        </svg>

        {/* Círculo de carga (animado) */}
        <motion.svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          initial={{ rotate: -90 }}
        >
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            stroke="currentColor"
            className="text-brand-orange"
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            initial={{ pathLength: 0.1 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
        </motion.svg>

        {/* --- 2. Logo (animado con "latido") --- */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* 3. Reemplazamos el CarIcon por tu logo */}
          <Image
            src="/main-log-acc.png"
            alt="Cargando logo de ACC"
            width={90} // 96px (w-24)
            height={90} // 96px (h-24)
            className="rounded-full object-contain" // Lo hacemos redondo
            priority // Le damos prioridad para que cargue rápido
          />
        </motion.div>
      </div>
      <p className="text-brand-dark font-semibold text-lg mt-4">
        Cargando...
      </p>
    </motion.div>
  );
}
