type ClassValue = string | number | false | null | undefined;

export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}

export function severityColor(severity: string | undefined) {
  switch (severity) {
    case "HIGH":
      return "text-red-400";
    case "MEDIUM":
      return "text-orange-400";
    case "LOW":
      return "text-yellow-400";
    default:
      return "text-gray-400";
  }
}

export function severityBorder(severity: string | undefined) {
  switch (severity) {
    case "HIGH":
      return "border-red-500/60";
    case "MEDIUM":
      return "border-orange-500/60";
    case "LOW":
      return "border-yellow-500/60";
    default:
      return "border-gray-600";
  }
}

export function severityBg(severity: string | undefined) {
  switch (severity) {
    case "HIGH":
      return "bg-red-500/10";
    case "MEDIUM":
      return "bg-orange-500/10";
    case "LOW":
      return "bg-yellow-500/10";
    default:
      return "bg-gray-500/10";
  }
}

export function classColor(classification: string | undefined) {
  switch (classification) {
    case "TP":
      return "text-red-400";
    case "FP":
      return "text-green-400";
    default:
      return "text-gray-400";
  }
}

export function formatTime(timestamp: string | number | Date | undefined) {
  if (!timestamp) return "Unknown time";
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return String(timestamp);

  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function timeAgo(timestamp: string | number | Date | undefined) {
  if (!timestamp) return "now";
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "now";

  const diffSeconds = Math.max(0, Math.floor((Date.now() - date.getTime()) / 1000));
  if (diffSeconds < 60) return `${diffSeconds}s ago`;

  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes}m ago`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}
