# Void Factory Starter

Starter template pour les projets SaaS de Void Factory. Une coquille complète et opinionée pour démarrer rapidement un nouveau projet.

## Tech Stack

### Core

- **Next.js 16** - App Router, React Server Components
- **React 19** - Avec React Compiler
- **TypeScript 5.9** - Configuration stricte
- **Tailwind CSS 4** - Styling utility-first

### Backend & Data

- **Supabase** - Auth, Database, Storage
- **Stripe** - Paiements et abonnements
- **React Query** - Server state management

### UI & Animations

- **Lucide React** - Icônes
- **Motion** - Animations
- **CVA + Tailwind Merge** - Variants de composants
- **clsx** - Class conditionnelles

### Tooling

- **pnpm** - Package manager
- **ESLint 9** - Linting (flat config)
- **Prettier** - Formatting
- **Vitest** - Unit testing
- **Playwright** - E2E testing
- **semantic-release** - Versioning automatique
- **t3-env** - Variables d'environnement typées avec Zod

## Quick Start

```bash
# Cloner le template
git clone https://github.com/void-factory/voidfactory-starter.git mon-projet
cd mon-projet

# Installer les dépendances
pnpm install

# Configurer l'environnement
cp .env.example .env.local

# Lancer le serveur de dev
pnpm dev
```

## Scripts disponibles

| Script               | Description                            |
| -------------------- | -------------------------------------- |
| `pnpm dev`           | Serveur de développement               |
| `pnpm build`         | Build de production                    |
| `pnpm start`         | Lancer le build de production          |
| `pnpm lint`          | Vérifier le linting                    |
| `pnpm format`        | Formatter le code (ESLint + Prettier)  |
| `pnpm test`          | Lancer les tests                       |
| `pnpm test:watch`    | Tests en mode watch                    |
| `pnpm test:coverage` | Tests avec couverture                  |
| `pnpm release`       | Release automatique (semantic-release) |

## Structure du projet

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── providers.tsx      # Providers React (Query, etc.)
│   └── page.test.tsx      # Tests de la page
├── lib/
│   ├── stripe/            # Configuration Stripe
│   │   └── stripe.ts
│   └── supabase/          # Client Supabase
│       └── client.ts
├── env.mjs                # Variables d'environnement typées
├── vitest.config.ts       # Configuration Vitest
├── eslint.config.mjs      # Configuration ESLint (flat)
├── prettier.config.mjs    # Configuration Prettier
└── .releaserc.json        # Configuration semantic-release
```

## Variables d'environnement

Créer un fichier `.env.local` avec les variables suivantes :

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Database (optionnel)
DATABASE_URL=postgresql://...
```

Les variables sont validées avec Zod via `@t3-oss/env-nextjs` dans [env.mjs](env.mjs).

## Checklist nouveau projet

### Configuration initiale

- [ ] Renommer le projet dans `package.json`
- [ ] Mettre à jour ce README
- [ ] Créer le repo GitHub
- [ ] Configurer les secrets GitHub Actions

### Supabase

- [ ] Créer le projet sur [supabase.com](https://supabase.com)
- [ ] Récupérer l'URL et les clés API
- [ ] Configurer les providers OAuth :
  - [ ] Google
  - [ ] Apple
- [ ] Créer le schéma de base de données

### Stripe

- [ ] Créer le compte sur [stripe.com](https://stripe.com)
- [ ] Récupérer les clés API (test puis live)
- [ ] Créer les produits et prix
- [ ] Configurer le webhook vers `/api/stripe/webhook`
- [ ] Tester avec Stripe CLI

### Observabilité

- [ ] Configurer le tracking analytics
- [ ] Mettre en place le monitoring d'erreurs (Sentry)
- [ ] Dashboard de métriques (MRR, users, etc.)

### Déploiement

- [ ] Configurer Vercel
- [ ] Ajouter les variables d'environnement
- [ ] Configurer le domaine
- [ ] Activer les GitHub Actions

## Conventions

### Commits

Ce projet utilise [Conventional Commits](https://www.conventionalcommits.org/) pour le versioning automatique :

```
feat: nouvelle fonctionnalité
fix: correction de bug
docs: documentation
style: formatting
refactor: refactoring
test: ajout de tests
chore: maintenance
```

### Branches

- `main` - Production, protégée
- `feat/*` - Nouvelles fonctionnalités
- `fix/*` - Corrections

## License

Propriétaire - Void Factory

---

Made with care by Void Factory
