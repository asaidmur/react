export default function getCurrentUTC() {
  const now = Date.now(); // Unix timestamp in milliseconds
  var time = new Date(now)
    .toISOString()
    .slice(0, -5)
    .replace("Z", "")
    .replace("T", " ");
  return time;
}
