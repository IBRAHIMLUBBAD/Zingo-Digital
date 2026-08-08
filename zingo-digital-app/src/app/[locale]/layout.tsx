import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing, LOCALE_DIRECTION } from '@/i18n/routing';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  const messages = await getMessages();
  const dir = LOCALE_DIRECTION[locale as keyof typeof LOCALE_DIRECTION] ?? 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {/* <SiteHeader /> ports the design tokens + nav from the static prototype */}
          {children}
          {/* <SiteFooter /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
