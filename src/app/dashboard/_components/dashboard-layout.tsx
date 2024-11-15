"use client";
import React from "react";
import Sidebar from "./UI/sidebar/sidebar";
import Header from "./UI/header/header";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
    const pathName = usePathname();

    return (
        <div className="flex h-screen">
            <div className="w-72 py-5 px-7">
                <Sidebar></Sidebar>
            </div>
            <div className="p-5 flex-grow">
                <h2>
                    <Header
                        title={pathName.split("/").pop()?.toLocaleUpperCase()}
                    />
                </h2>
                <div>{children}</div>
            </div>
        </div>
    );
}

export { DashboardLayout };
