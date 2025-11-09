'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, CpuChipIcon, Cog8ToothIcon, LightBulbIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ServicesSection() {
  const t = useTranslations();
  const locale = useLocale();

  const services = [
    { key: 'virtualAssistants', icon: CpuChipIcon, href: 'virtual-assistants' },
    { key: 'chatbots', icon: ChatBubbleLeftRightIcon, href: 'chatbots' },
    { key: 'automation', icon: Cog8ToothIcon, href: 'automation' },
    { key: 'consulting', icon: LightBulbIcon, href: 'consulting' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.services.title')}</h2>
          <p className="text-xl text-gray-600">{t('home.services.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0066cc] to-[#00aaff] rounded-2xl flex items-center justify-center shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t(`services.${service.key}.description`)}
              </p>
              <Link href={`/${locale}/services/${service.href}`}>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-[#0066cc] font-semibold hover:text-[#004c99] transition-colors"
                >
                  <span>En savoir plus</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
