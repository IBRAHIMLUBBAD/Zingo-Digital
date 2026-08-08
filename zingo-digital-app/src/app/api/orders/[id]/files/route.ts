// POST /api/orders/[id]/files — issue signed upload URL, then record the
// order_files row on confirmed upload. See lib/storage.ts.
// Implementation deferred to M3.
export async function POST(request: Request, { params }: { params: { id: string } }) {
  return new Response(JSON.stringify({ error: { code: 'not_implemented', message: 'Pending M3' } }), { status: 501 });
}
