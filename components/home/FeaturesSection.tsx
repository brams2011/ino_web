'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  AcademicCapIcon,
  CursorArrowRaysIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function FeaturesSection() {
  const t = useTranslations('home.features');

  const features = [
    {
      icon: SparklesIcon,
      key: 'innovation',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: AcademicCapIcon,
      key: 'expertise',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CursorArrowRaysIcon,
      key: 'accessibility',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: UserGroupIcon,
      key: 'support',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t(`${feature.key}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`${feature.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
