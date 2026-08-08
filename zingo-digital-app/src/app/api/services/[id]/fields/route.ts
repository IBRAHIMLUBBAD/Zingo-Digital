// GET /api/services/[id]/fields — field schema consumed by
// <DynamicServiceForm>. Implementation deferred to M2.
export async function GET(request: Request, { params }: { params: { id: string } }) {
  return new Response(JSON.stringify({ error: { code: 'not_implemented', message: 'Pending M2' } }), { status: 501 });
}
