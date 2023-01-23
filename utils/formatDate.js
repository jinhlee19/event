export function formatDateForInput(date) {
  const formatted = new Date(date).toString().slice(0, 10);
  return formatted;
}
