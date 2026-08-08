// POST/PATCH /api/admin/coupons — manage coupons + usage rules, admin-only.
// Implementation deferred to M6.
export async function POST(request: Request) {
  return new Response(JSON.stringify({ error: { code: 'not_implemented', message: 'Pending M6' } }), { status: 501 });
}
