export function getCurrentDateMMDDYYYY() {
  const now = new Date();

  const month = String(now.getMonth() + 1).padStart(2, '0'); // 0–11 → 01–12
  const day = String(now.getDate()).padStart(2, '0');        // 1–31 → 01–31
  const year = now.getFullYear();

  return `${month}/${day}/${year}`;
}
