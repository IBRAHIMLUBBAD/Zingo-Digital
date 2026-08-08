// POST /api/auth/register — create account, send verification email.
// See lib/auth.ts + lib/email.ts. Implementation deferred to M1.
export async function POST(request: Request) {
  return new Response(JSON.stringify({ error: { code: 'not_implemented', message: 'Pending M1' } }), { status: 501 });
}
