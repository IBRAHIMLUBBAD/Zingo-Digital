// POST /api/orders — create order from submitted field values (customer).
// GET  /api/orders — list own orders (customer) / filtered list (admin).
// Server recomputes price/discount — never trusts client values.
// Implementation deferred to M3.
export async function POST(request: Request) {
  return new Response(JSON.stringify({ error: { code: 'not_implemented', message: 'Pending M3' } }), { status: 501 });
}
export async function GET(request: Request) {
  return new Response(JSON.stringify({ error: { code: 'not_implemented', message: 'Pending M3' } }), { status: 501 });
}
