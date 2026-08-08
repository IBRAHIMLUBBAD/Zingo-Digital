// PATCH /api/orders/[id]/status — admin-only status change, writes
// order_status_history. Implementation deferred to M3.
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  return new Response(JSON.stringify({ error: { code: 'not_implemented', message: 'Pending M3' } }), { status: 501 });
}
