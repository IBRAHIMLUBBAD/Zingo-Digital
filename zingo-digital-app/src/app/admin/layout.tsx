// Admin shell — separate auth guard (requireAdmin) from the customer app,
// reuses the same design tokens (ARCHITECTURE.md §3).
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return null; // TODO(M5): requireAdmin(), <AdminNav />
}
