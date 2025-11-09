'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function QuotePage() {
  const t = useTranslations('quote');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Demande de devis envoyée avec succès!');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('form.name')}</label>
              <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc]" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('form.email')}</label>
              <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc]" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('form.service')}</label>
              <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc]">
                <option value="">{t('form.selectService')}</option>
                <option value="virtual">{t('services.virtualAssistant')}</option>
                <option value="chatbot">{t('services.chatbot')}</option>
                <option value="automation">{t('services.automation')}</option>
                <option value="consulting">{t('services.consulting')}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('form.description')}</label>
              <textarea required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] resize-none" placeholder={t('form.descriptionPlaceholder')} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-[#0066cc] to-[#00aaff] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50"
            >
              {isSubmitting ? t('form.submitting') : t('form.submit')}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
