// GET /api/files/[key]/download — ownership/admin check, then a
// short-lived signed R2 URL. Never serves file bytes directly.
// Implementation deferred to M3.
export async function GET(request: Request, { params }: { params: { key: string } }) {
  return new Response(JSON.stringify({ error: { code: 'not_implemented', message: 'Pending M3' } }), { status: 501 });
}
