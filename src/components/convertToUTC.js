export default function convertToUTC(epochTime) {
  try {
    var d = new Date(0);
    var date = d.setUTCSeconds(epochTime);
    var time = new Date(date)
      .toISOString()
      .slice(0, -5)
      .replace("Z", "")
      .replace("T", " ");
  } catch (error) {
    console.log(error);
  }
  return time;
}
