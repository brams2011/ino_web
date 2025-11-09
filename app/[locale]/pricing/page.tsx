'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

export default function PricingPage() {
  const t = useTranslations('pricing');
  const locale = useLocale();

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('starter.name')}</h3>
            <p className="text-gray-600 mb-6">{t('starter.description')}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#0066cc]">{t('starter.price')}</span>
              <span className="text-gray-600">{t('starter.period')}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {(t.raw('starter.features') as string[]).map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link href={`/${locale}/quote`}>
              <button className="w-full py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                {t('starter.cta')}
              </button>
            </Link>
          </motion.div>

          {/* Business */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-[#0066cc] to-[#00aaff] rounded-2xl shadow-2xl p-8 transform scale-105 relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
              Populaire
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{t('business.name')}</h3>
            <p className="text-blue-100 mb-6">{t('business.description')}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">{t('business.price')}</span>
              <span className="text-blue-100">{t('business.period')}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {(t.raw('business.features') as string[]).map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>
            <Link href={`/${locale}/quote`}>
              <button className="w-full py-3 bg-white text-[#0066cc] font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                {t('business.cta')}
              </button>
            </Link>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('enterprise.name')}</h3>
            <p className="text-gray-600 mb-6">{t('enterprise.description')}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#0066cc]">{t('enterprise.price')}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {(t.raw('enterprise.features') as string[]).map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link href={`/${locale}/contact`}>
              <button className="w-full py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                {t('enterprise.cta')}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
