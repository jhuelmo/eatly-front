import { DashboardLayout } from "./_components/dashboard-layout";
import React from "react";

export const metadata = {
    title: "Dashboard",
    description: "Dashboard",
};

interface AppLayoutProps {
    children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
    return <DashboardLayout>{children}</DashboardLayout>;
}

export default AppLayout;
