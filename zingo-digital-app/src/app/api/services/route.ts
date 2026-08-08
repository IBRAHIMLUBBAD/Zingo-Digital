// GET /api/services — list active services + categories (public).
// Implementation deferred to M2.
export async function GET() {
  return new Response(JSON.stringify({ error: { code: 'not_implemented', message: 'Pending M2' } }), { status: 501 });
}
