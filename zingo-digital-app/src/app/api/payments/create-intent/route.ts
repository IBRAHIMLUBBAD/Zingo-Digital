// POST /api/payments/create-intent — server computes total, asks the
// gateway (lib/payments.ts) for a payment session. Gateway TBD pending
// your confirmation (see ARCHITECTURE.md "Approval"). Deferred to M4.
export async function POST(request: Request) {
  return new Response(JSON.stringify({ error: { code: 'not_implemented', message: 'Pending M4' } }), { status: 501 });
}
