import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

interface ServicePageProps {
  serviceKey: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function ServicePageTemplate({ serviceKey, icon: Icon }: ServicePageProps) {
  const t = useTranslations(`services.${serviceKey}`);
  const locale = useLocale();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-[#0066cc] to-[#00aaff] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Icon className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{t('title')}</h1>
            <p className="text-2xl text-gray-600 mb-8">{t('subtitle')}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{t('description')}</p>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Features */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('features.title')}</h2>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{t(`features.feature${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('benefits.title')}</h2>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckIcon className="w-6 h-6 text-[#0066cc] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{t(`benefits.benefit${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0066cc] to-[#00aaff]">
        <div className="container mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Prêt à commencer ?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider
            </p>
            <Link href={`/${locale}/quote`}>
              <button className="px-10 py-4 bg-white text-[#0066cc] font-bold text-lg rounded-full shadow-2xl hover:shadow-white/50 transition-shadow inline-flex items-center space-x-3">
                <span>Demander un devis</span>
                <ArrowRightIcon className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
