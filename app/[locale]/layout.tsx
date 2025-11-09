import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatbotWidget from '@/components/ChatbotWidget';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return {
    title: 'Ino-Service - Solutions IA pour Entreprises',
    description: 'Transformez votre entreprise avec nos solutions d\'Intelligence Artificielle sur mesure. Assistants virtuels, chatbots, automatisation et conseil.',
    keywords: 'IA, Intelligence Artificielle, Chatbot, Assistant Virtuel, Automatisation, Conseil IA, PME',
    authors: [{ name: 'Ino-Service' }],
    openGraph: {
      type: 'website',
      locale: locale,
      url: 'https://ino-service.com',
      title: 'Ino-Service - Solutions IA pour Entreprises',
      description: 'Transformez votre entreprise avec nos solutions d\'Intelligence Artificielle sur mesure.',
      siteName: 'Ino-Service',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Ino-Service - Solutions IA pour Entreprises',
      description: 'Transformez votre entreprise avec nos solutions d\'Intelligence Artificielle sur mesure.',
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Get messages for this locale
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatbotWidget />
      </div>
    </NextIntlClientProvider>
  );
}
