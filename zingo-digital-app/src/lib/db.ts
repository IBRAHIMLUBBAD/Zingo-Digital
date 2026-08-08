// Prisma client singleton. Standard Next.js pattern to avoid exhausting
// connections in dev (hot reload) — implementation deferred to M0.
//
// import { PrismaClient } from '@prisma/client';
// export const db = global.prisma ?? new PrismaClient();
// if (process.env.NODE_ENV !== 'production') global.prisma = db;
export {};
