// Cloudflare R2 (S3-compatible) client + signed URL helpers
// (ARCHITECTURE.md §6). Responsibilities once implemented (M3):
//  - getUploadUrl(orderId, filename, mimeType): signed PUT URL, source|deliverable
//  - getDownloadUrl(storageKey): short-lived signed GET URL, ownership-checked
//  - validateFile(mimeType, sizeBytes): server-side allow-list + max size
export {};
