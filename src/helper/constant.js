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
      {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/",
      },
      {
        name: "Tracking",
        icon: Truck,
        path: "/tracking",
      },
      {
        name: "Shipments",
        icon: Package,
        path: "/shipments",
      },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        name: "Settings",
        icon: Settings,
        path: "/settings",
      },
      {
        name: "Log out",
        icon: LogOut,
        action: "logout",
      },
    ],
  },
];

export const profileMenu = [
  {
    name: "Profile",
    icon: User,
  },
  {
    name: "Settings",
    icon: Settings,
  },
  {
    name: "Logout",
    icon: LogOut,
  },
];

export const statsData = [
  {
    title: "Total Shipments",
    value: 1284,
    icon: PackageCheck,
    percentage: "2.9%",
    trend: "up",
  },
  {
    title: "Pending",
    value: 320,
    icon: Clock3,
    percentage: "1.4%",
    trend: "down",
  },
  {
    title: "Delivery",
    value: 875,
    icon: Truck,
    percentage: "2.9%",
    trend: "up",
  },
  {
    title: "Completed",
    value: 236,
    icon: CheckCircle2,
    percentage: "2.9%",
    trend: "up",
  },
];
