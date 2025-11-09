'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { SparklesIcon, EyeIcon, HeartIcon, LightBulbIcon, ShieldCheckIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  const t = useTranslations('about');

  const values = [
    { key: 'innovation', icon: LightBulbIcon },
    { key: 'simplicity', icon: SparklesIcon },
    { key: 'trust', icon: ShieldCheckIcon },
    { key: 'excellence', icon: RocketLaunchIcon }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0066cc] to-[#00aaff] rounded-2xl flex items-center justify-center mb-6">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('mission.title')}</h2>
              <p className="text-gray-600 leading-relaxed">{t('mission.description')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <EyeIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('vision.title')}</h2>
              <p className="text-gray-600 leading-relaxed">{t('vision.description')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('values.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0066cc] to-[#00aaff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(`values.${value.key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`values.${value.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('team.title')}</h2>
            <p className="text-xl text-gray-600 mb-12">{t('team.subtitle')}</p>
            <div className="max-w-2xl mx-auto text-gray-600">
              <p className="mb-4">
                Notre équipe est composée d'experts passionnés par l'intelligence artificielle et dévoués à votre réussite.
              </p>
              <p>
                Nous combinons expertise technique, créativité et approche centrée sur le client pour offrir des solutions IA qui font vraiment la différence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
