export function formatDateTime(date) {
  return new Date(date).toLocaleString("en-US", {
    month: "long", // Full month name
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}
// Example output: "January 15, 2024 at 2:30:45 PM"
