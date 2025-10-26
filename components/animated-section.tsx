'use client';

import { motion } from 'framer-motion';
import React from 'react';

// --- Wrapper de Animación (Para carga suave) ---
export const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} // La animación solo ocurre una vez
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
