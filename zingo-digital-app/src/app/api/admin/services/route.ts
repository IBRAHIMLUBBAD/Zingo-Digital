// POST/PATCH /api/admin/services — create/edit a service + its field
// schema, admin-only. This is what lets new services ship without code
// changes (Brief §6). Implementation deferred to M2.
export async function POST(request: Request) {
  return new Response(JSON.stringify({ error: { code: 'not_implemented', message: 'Pending M2' } }), { status: 501 });
}
