import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layout";
import Dashboard from "../pages/dashboard";
import Tracking from "../pages/tracking";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tracking" element={<Tracking />} />
        {/* <Route path="/shipments" element={<Shipments />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
