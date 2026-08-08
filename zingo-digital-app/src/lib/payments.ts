// Payment gateway abstraction (ARCHITECTURE.md §7).
// Responsibilities once implemented (M4):
//  - createPaymentIntent(order): asks the gateway for a hosted payment session
//  - handleWebhook(rawEvent, signature): verifies signature, idempotency-checks
//    provider_ref, and is the ONLY code path allowed to set
//    payments.status = 'paid' / orders.status = 'Paid'
//  - refund(paymentId): admin-triggered, calls gateway refund API
// Gateway choice pending your confirmation — see ARCHITECTURE.md "Approval".
export {};
