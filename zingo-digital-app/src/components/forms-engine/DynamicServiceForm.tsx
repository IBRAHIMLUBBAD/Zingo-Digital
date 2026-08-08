// The Dynamic Service Form Engine's renderer (ARCHITECTURE.md §9).
// Given a serviceId, fetches its `service_fields` schema and renders one
// input component per field `type`, building a matching zod schema at
// runtime so client and server validation never drift apart.
//
// This is what service-detail.html's hand-written PDF-editing form becomes
// once wired up — same visual output, schema-driven instead of hard-coded.
export function DynamicServiceForm({ serviceId }: { serviceId: string }) {
  return null; // TODO(M2)
}
