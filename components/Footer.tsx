'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setMessage('Merci! Vous êtes maintenant inscrit à notre newsletter.');
      setEmail('');
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 3000);
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-3xl font-bold">
              <span className="text-[#0066cc]">Ino</span>
              <span className="text-white">-</span>
              <span className="text-[#00aaff]">Service</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0066cc] transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0066cc] transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0066cc] transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0066cc] transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0066cc] transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-gray-400 hover:text-[#0066cc] transition-colors text-sm"
                >
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/virtual-assistants`}
                  className="text-gray-400 hover:text-[#0066cc] transition-colors text-sm"
                >
                  {tNav('services')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/pricing`}
                  className="text-gray-400 hover:text-[#0066cc] transition-colors text-sm"
                >
                  {tNav('pricing')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/news`}
                  className="text-gray-400 hover:text-[#0066cc] transition-colors text-sm"
                >
                  {tNav('news')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-gray-400 hover:text-[#0066cc] transition-colors text-sm"
                >
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-gray-400 hover:text-[#0066cc] transition-colors text-sm"
                >
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-gray-400 hover:text-[#0066cc] transition-colors text-sm"
                >
                  {t('terms')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cookies`}
                  className="text-gray-400 hover:text-[#0066cc] transition-colors text-sm"
                >
                  {t('cookies')}
                </Link>
              </li>
            </ul>

            <div className="mt-6 space-y-2">
              <div className="flex items-start space-x-2 text-gray-400 text-sm">
                <EnvelopeIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>contact@ino-service.com</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400 text-sm">
                <PhoneIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('newsletter')}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {t('newsletterText')}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('emailPlaceholder')}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066cc] text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 bg-[#0066cc] text-white font-medium rounded-lg hover:bg-[#004c99] transition-colors disabled:opacity-50 text-sm"
              >
                {isSubmitting ? '...' : t('subscribe')}
              </motion.button>
              {message && (
                <p className="text-sm text-green-400">{message}</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ino-Service. {t('copyright').split('. ')[1]}
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <MapPinIcon className="w-5 h-5" />
              <span>123 Avenue de l'Innovation, 75001 Paris, France</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
