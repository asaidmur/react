export default function btnColor(status) {
  switch (status) {
    case "RED":
      return "btn btn-danger";
    case "WARNING":
      return "btn btn-warning";
    case "INFO":
      return "btn btn-info";
    case "GREEN":
      return "btn btn-success";
    case "OBSOLETE":
      return "btn btn-secondary";
    default:
      return "btn btn-light";
  }
}
