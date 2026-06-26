import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layout";
import Dashboard from "../pages/dashboard";
import Placeholder from "../pages/placeholder";
import NotFound from "../pages/not-found";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tracking" element={<Placeholder title="Tracking" />} />
        <Route path="/shipments" element={<Placeholder title="Shipments" />} />
        <Route path="/settings" element={<Placeholder title="Settings" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
