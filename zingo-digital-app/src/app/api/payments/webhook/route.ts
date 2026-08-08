// POST /api/payments/webhook — gateway calls this; verifies signature,
// idempotency-checks provider_ref, and is the ONLY writer of
// payments.status / orders.status = 'Paid'. Never trust a client callback
// instead of this handler. Implementation deferred to M4.
export async function POST(request: Request) {
  return new Response(JSON.stringify({ error: { code: 'not_implemented', message: 'Pending M4' } }), { status: 501 });
}
