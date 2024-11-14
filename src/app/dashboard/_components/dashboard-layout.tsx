import React from "react";
import Sidebar from "./UI/sidebar/sidebar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex h-screen">
            <div className="w-72 py-5 px-7">
                <Sidebar></Sidebar>
            </div>
            <div className="p-5 flex-grow">{children}</div>
        </div>
    );
}

export { DashboardLayout };
