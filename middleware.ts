import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // Liste des locales supportées
  locales,

  // Locale par défaut
  defaultLocale,

  // Toujours afficher le préfixe de locale dans l'URL
  localePrefix: 'always'
});

export const config = {
  // Matcher pour toutes les pages sauf les fichiers statiques
  matcher: ['/', '/(fr|en|es)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
