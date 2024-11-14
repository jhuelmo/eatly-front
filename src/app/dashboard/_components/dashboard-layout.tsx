import React from "react";
import Sidebar from "./UI/sidebar/sidebar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="bg-background text-text">
            <div>
                <Sidebar></Sidebar>
            </div>
            <div>{children}</div>
        </div>
    );
}

export { DashboardLayout };
