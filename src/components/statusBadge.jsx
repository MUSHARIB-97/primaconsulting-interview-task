import { formatStatusLabel, statusBadgeClass } from "../helper/format";

const StatusBadge = ({ status }) => (
  <span
    className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${statusBadgeClass(
      status,
    )}`}
  >
    {formatStatusLabel(status)}
  </span>
);

export default StatusBadge;
