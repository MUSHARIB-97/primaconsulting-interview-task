import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center bg-white border border-gray-100 shadow-sm rounded-2xl">
      <div className="flex items-center justify-center text-purple-600 rounded-full w-14 h-14 bg-purple-50">
        <Compass size={26} />
      </div>
      <p className="text-3xl font-bold text-gray-800">404</p>
      <h2 className="text-lg font-semibold text-gray-700">Page not found</h2>
      <p className="max-w-sm text-sm text-gray-500">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        to="/"
        className="px-4 py-2 mt-1 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700"
      >
        Back to dashboard
      </Link>
    </div>
  );
};

export default NotFound;
