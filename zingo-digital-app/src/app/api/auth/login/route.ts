// POST /api/auth/login — session login. Implementation deferred to M1.
export async function POST(request: Request) {
  return new Response(JSON.stringify({ error: { code: 'not_implemented', message: 'Pending M1' } }), { status: 501 });
}
