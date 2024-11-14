import { House, CookingPot, Calendar } from "lucide-react";

export const dashboardLinks: TMenuLink[] = [
    { name: "Dashboard", path: "/dashboard", icon: <House /> },
    { name: "Recipes", path: "/dashboard/recipes", icon: <CookingPot /> },
    { name: "Planner", path: "/dashboard/planner", icon: <Calendar /> },
];
