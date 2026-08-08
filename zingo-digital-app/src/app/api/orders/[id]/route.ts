// GET /api/orders/[id] — order detail (owner or admin only).
// Implementation deferred to M3.
export async function GET(request: Request, { params }: { params: { id: string } }) {
  return new Response(JSON.stringify({ error: { code: 'not_implemented', message: 'Pending M3' } }), { status: 501 });
}
