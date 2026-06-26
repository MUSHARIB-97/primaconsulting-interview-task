import { Construction } from "lucide-react";

const Placeholder = ({ title = "This section" }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center bg-white border border-gray-100 shadow-sm rounded-2xl">
      <div className="flex items-center justify-center text-purple-600 rounded-full w-14 h-14 bg-purple-50">
        <Construction size={26} />
      </div>
      <h2 className="text-lg font-semibold text-gray-800">
        {title} is coming soon
      </h2>
      <p className="max-w-sm text-sm text-gray-500">
        We&apos;re still building this page. For now, head back to the dashboard
        to view shipment data.
      </p>
    </div>
  );
};

export default Placeholder;
