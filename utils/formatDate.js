export function formatDate(date) {
  const formatted = new Date(date).toISOString().slice(0, 10);
  return formatted;
}
