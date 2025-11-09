'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function NewsPage() {
  const t = useTranslations('news');

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-[#0066cc] to-[#00aaff]" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Article d'actualité IA {item}</h3>
                <p className="text-gray-600 mb-4">Découvrez les dernières innovations en intelligence artificielle...</p>
                <button className="text-[#0066cc] font-semibold hover:text-[#004c99]">{t('readMore')}</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
