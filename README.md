# Ino-Service - Site Web Professionnel

Site web multilingue pour l'agence d'Intelligence Artificielle Ino-Service.

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build de production
npm run build
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🌍 Langues Supportées

- **Français** (défaut) : `/fr`
- **Anglais** : `/en`
- **Espagnol** : `/es`

## 📄 Pages Disponibles

### Pages Principales
- **Accueil** : `/[locale]` - Hero, features, services, testimonials
- **À Propos** : `/[locale]/about` - Mission, vision, valeurs, équipe
- **Tarifs** : `/[locale]/pricing` - 3 forfaits (Starter, Business, Enterprise)
- **Actualités** : `/[locale]/news` - Blog et actualités IA
- **Contact** : `/[locale]/contact` - Formulaire + infos
- **Devis** : `/[locale]/quote` - Demande de devis personnalisé

### Pages Services
- `/[locale]/services/virtual-assistants` - Assistants Virtuels
- `/[locale]/services/chatbots` - Chatbots
- `/[locale]/services/automation` - Automatisation
- `/[locale]/services/consulting` - Conseil

## 🎨 Stack Technique

- **Next.js** 15.5.6 (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Heroicons** + React Icons
- **next-intl** (i18n)

## ✅ Fonctionnalités

✅ Design responsive mobile-first
✅ 3 langues avec traductions complètes
✅ Animations fluides
✅ Widget chatbot
✅ Formulaires de contact
✅ SEO optimisé
✅ 34 pages statiques
✅ Carrousel testimonials

## 🔧 Configuration

**Couleurs principales:**
- Primary: `#0066cc`
- Secondary: `#00aaff`
- Accent: `#66ccff`

**Modifier les traductions:** Éditer les fichiers dans `/messages/`

## 📦 Structure

```
ino_web/
├── app/[locale]/      # Pages multilingues
├── components/        # Composants React
├── messages/          # Traductions (fr/en/es)
├── i18n.ts           # Config i18n
├── middleware.ts     # Middleware next-intl
└── next.config.ts    # Config Next.js
```

## 🐛 Solution Problème 404

Le problème 404 a été résolu par :
1. Downgrade Next.js 16 → 15.5.6
2. Configuration correcte `requestLocale` dans `i18n.ts`
3. Retour explicite du `locale`

## 🚢 Déploiement

```bash
vercel
```

---

© 2024 Ino-Service
