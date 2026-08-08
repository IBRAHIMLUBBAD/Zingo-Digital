import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Locale negotiation only for now. Session/role auth guard for /dashboard and
// /admin is part of M1 (see ARCHITECTURE.md §5, §13) and will be composed
// into this same middleware once auth is implemented.
export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
