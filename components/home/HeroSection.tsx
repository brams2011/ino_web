'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SparklesIcon, RocketLaunchIcon, CpuChipIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const t = useTranslations('home.hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#0066cc]/10 to-[#00aaff]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#00aaff]/10 to-[#0066cc]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-blue-100 text-[#0066cc] px-4 py-2 rounded-full text-sm font-medium"
            >
              <SparklesIcon className="w-4 h-4" />
              <span>Intelligence Artificielle pour Entreprises</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('title').split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`inline-block mr-3 ${
                    word.toLowerCase().includes('intelligence') ||
                    word.toLowerCase().includes('artificielle') ||
                    word.toLowerCase().includes('artificial')
                      ? 'text-[#0066cc]'
                      : ''
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href={`/${locale}/services/virtual-assistants`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0066cc] to-[#00aaff] text-white font-semibold rounded-full shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 transition-shadow flex items-center justify-center space-x-2"
                >
                  <span>{t('cta')}</span>
                  <RocketLaunchIcon className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href={`/${locale}/quote`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-[#0066cc] font-semibold rounded-full border-2 border-[#0066cc] hover:bg-blue-50 transition-colors"
                >
                  {t('ctaSecondary')}
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0066cc]">500+</div>
                <div className="text-sm text-gray-600 mt-1">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0066cc]">98%</div>
                <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0066cc]">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-96 h-96 border-2 border-dashed border-[#0066cc]/30 rounded-full" />
              </motion.div>

              {/* Center Circle with Icon */}
              <div className="relative flex items-center justify-center h-[500px]">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-64 h-64 bg-gradient-to-br from-[#0066cc] to-[#00aaff] rounded-full shadow-2xl flex items-center justify-center"
                >
                  <CpuChipIcon className="w-32 h-32 text-white" />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <SparklesIcon className="w-10 h-10 text-[#0066cc]" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [20, -20, 20],
                    x: [10, -10, 10],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <RocketLaunchIcon className="w-10 h-10 text-[#00aaff]" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#0066cc] rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#0066cc] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
