// Service detail — renders <DynamicServiceForm serviceId /> built from
// `service_fields` (ARCHITECTURE.md §9). Replaces the hand-written
// service-detail.html; this file should stay generic for every service.
export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  return null; // TODO(M2): fetch service by slug, render <DynamicServiceForm />
}
