import { defineRouting } from 'next-intl/routing';

// English / Arabic per the Phase 1 brief's i18n requirement.
// Arabic renders right-to-left — see src/app/[locale]/layout.tsx for the
// dir="rtl" wiring and ARCHITECTURE.md §10 for the full plan.
export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
});

export const LOCALE_DIRECTION: Record<(typeof routing)['locales'][number], 'ltr' | 'rtl'> = {
  en: 'ltr',
  ar: 'rtl',
};
