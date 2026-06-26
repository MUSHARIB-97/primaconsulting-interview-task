import {
  LayoutDashboard,
  Truck,
  Package,
  Settings,
  LogOut,
  User,
  Clock3,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";

export const menuItems = [
  {
    title: "GENERAL",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, path: "/" },
      { name: "Tracking", icon: Truck, path: "/tracking" },
      { name: "Shipments", icon: Package, path: "/shipments" },
    ],
  },
  {
    title: "OTHERS",
    items: [
      { name: "Settings", icon: Settings, path: "/settings" },
      { name: "Log out", icon: LogOut, action: "logout" },
    ],
  },
];

export const profileMenu = [
  { name: "Profile", icon: User },
  { name: "Settings", icon: Settings },
];

export const statusFilters = [
  { value: "", label: "All Status" },
  { value: "in_transit", label: "In Transit" },
  { value: "out_for_delivery", label: "Out for Delivery" },
  { value: "delivered", label: "Delivered" },
  { value: "pending", label: "Pending" },
  { value: "delayed", label: "Delayed" },
  { value: "customs_hold", label: "Customs Hold" },
  { value: "returned", label: "Returned" },
  { value: "cancelled", label: "Cancelled" },
];

export const pageSizeOptions = [12, 25, 50, 100];

export const buildStatsCards = (stats = {}) => [
  {
    title: "Total Shipments",
    value: stats.total_shipments,
    icon: PackageCheck,
  },
  { title: "Pending", value: stats.pending, icon: Clock3 },
  { title: "Delivered", value: stats.delivered, icon: Truck },
  { title: "Completed", value: stats.completed, icon: CheckCircle2 },
];
