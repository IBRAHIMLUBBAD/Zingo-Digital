// Session + role helpers (ARCHITECTURE.md §5).
// Responsibilities once implemented (M1):
//  - hashPassword / verifyPassword (bcrypt/argon2)
//  - createSession / getSession (HTTP-only, secure, signed cookie)
//  - requireUser(): throws if unauthenticated
//  - requireAdmin(role?: AdminRole): throws if not an authorized admin
//  - assertOwnsOrder(userId, orderId): server-side authorization check used
//    by every /api/orders/* and /api/files/* handler
export {};
