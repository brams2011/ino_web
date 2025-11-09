'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { key: 'virtualAssistants', href: `/${locale}/services/virtual-assistants` },
    { key: 'chatbots', href: `/${locale}/services/chatbots` },
    { key: 'automation', href: `/${locale}/services/automation` },
    { key: 'consulting', href: `/${locale}/services/consulting` },
  ];

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ];

  const switchLanguage = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="text-3xl font-bold text-[#0066cc]">
                  Ino
                  <span className="inline-block relative">
                    <span className="text-[#0066cc]">-</span>
                    <span className="text-[#00aaff]">Service</span>
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href={`/${locale}`}
                className={`text-sm font-medium transition-colors hover:text-[#0066cc] ${
                  pathname === `/${locale}` ? 'text-[#0066cc]' : 'text-gray-700'
                }`}
              >
                {t('home')}
              </Link>

              <Link
                href={`/${locale}/about`}
                className={`text-sm font-medium transition-colors hover:text-[#0066cc] ${
                  pathname.includes('/about') ? 'text-[#0066cc]' : 'text-gray-700'
                }`}
              >
                {t('about')}
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-[#0066cc] ${
                    pathname.includes('/services') ? 'text-[#0066cc]' : 'text-gray-700'
                  }`}
                >
                  <span>{t('services')}</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.key}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0066cc] transition-colors"
                        >
                          {t(`services.${service.key}.title` as any) || service.key}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href={`/${locale}/pricing`}
                className={`text-sm font-medium transition-colors hover:text-[#0066cc] ${
                  pathname.includes('/pricing') ? 'text-[#0066cc]' : 'text-gray-700'
                }`}
              >
                {t('pricing')}
              </Link>

              <Link
                href={`/${locale}/news`}
                className={`text-sm font-medium transition-colors hover:text-[#0066cc] ${
                  pathname.includes('/news') ? 'text-[#0066cc]' : 'text-gray-700'
                }`}
              >
                {t('news')}
              </Link>

              <Link
                href={`/${locale}/contact`}
                className={`text-sm font-medium transition-colors hover:text-[#0066cc] ${
                  pathname.includes('/contact') ? 'text-[#0066cc]' : 'text-gray-700'
                }`}
              >
                {t('contact')}
              </Link>

              {/* Language Selector */}
              <div
                className="relative"
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
              >
                <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-[#0066cc] transition-colors">
                  <GlobeAltIcon className="w-5 h-5" />
                  <span className="uppercase">{locale}</span>
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => switchLanguage(lang.code)}
                          className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-[#0066cc] transition-colors ${
                            locale === lang.code ? 'text-[#0066cc] bg-blue-50' : 'text-gray-700'
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <Link href={`/${locale}/quote`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-[#0066cc] text-white text-sm font-medium rounded-full hover:bg-[#004c99] transition-colors shadow-lg shadow-blue-500/30"
                >
                  {t('getQuote')}
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#0066cc] transition-colors"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-white"
          >
            <div className="flex flex-col h-full pt-24 pb-6 px-6 overflow-y-auto">
              <Link
                href={`/${locale}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-lg font-medium text-gray-700 hover:text-[#0066cc] transition-colors border-b border-gray-100"
              >
                {t('home')}
              </Link>

              <Link
                href={`/${locale}/about`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-lg font-medium text-gray-700 hover:text-[#0066cc] transition-colors border-b border-gray-100"
              >
                {t('about')}
              </Link>

              <div className="py-3 border-b border-gray-100">
                <div className="text-lg font-medium text-gray-700 mb-2">
                  {t('services')}
                </div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.key}
                      href={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-gray-600 hover:text-[#0066cc] transition-colors"
                    >
                      {t(`services.${service.key}.title` as any) || service.key}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={`/${locale}/pricing`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-lg font-medium text-gray-700 hover:text-[#0066cc] transition-colors border-b border-gray-100"
              >
                {t('pricing')}
              </Link>

              <Link
                href={`/${locale}/news`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-lg font-medium text-gray-700 hover:text-[#0066cc] transition-colors border-b border-gray-100"
              >
                {t('news')}
              </Link>

              <Link
                href={`/${locale}/contact`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-lg font-medium text-gray-700 hover:text-[#0066cc] transition-colors border-b border-gray-100"
              >
                {t('contact')}
              </Link>

              {/* Language Selector Mobile */}
              <div className="py-3 border-b border-gray-100">
                <div className="text-lg font-medium text-gray-700 mb-2">
                  Language / Langue / Idioma
                </div>
                <div className="pl-4 space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        switchLanguage(lang.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block py-2 ${
                        locale === lang.code ? 'text-[#0066cc] font-medium' : 'text-gray-600'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                href={`/${locale}/quote`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6"
              >
                <button className="w-full px-6 py-3 bg-[#0066cc] text-white font-medium rounded-full hover:bg-[#004c99] transition-colors shadow-lg">
                  {t('getQuote')}
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
}
