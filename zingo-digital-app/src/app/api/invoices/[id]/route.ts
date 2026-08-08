// GET /api/invoices/[id] — fetch/generate invoice PDF (owner or admin).
// Implementation deferred to M4.
export async function GET(request: Request, { params }: { params: { id: string } }) {
  return new Response(JSON.stringify({ error: { code: 'not_implemented', message: 'Pending M4' } }), { status: 501 });
}
