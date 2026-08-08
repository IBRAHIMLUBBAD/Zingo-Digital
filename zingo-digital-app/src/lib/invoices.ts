// PDF invoice generation module (ARCHITECTURE.md §8).
// Responsibilities once implemented (M4):
//  - generateInvoice(order): renders invoice PDF, uploads to storage.ts,
//    writes the `invoices` row, returns the signed download URL
//  - triggered by payments.ts webhook handler on payments.status = 'paid'
export {};
