import React from "react";
import { dashboardLinks } from "@/utils/dashboard-links";
import MenuLink from "../../menu-link";
import Image from "next/image";
import { Logo } from "@/components/UI/logo";
import { CircleHelp, Settings } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <div className="flex p-3">
                    <Logo />
                </div>
                <hr className="bg-gray-200 h-[2px] my-2" />
                <nav className="my-4">
                    <ul>
                        {dashboardLinks.map((link) => {
                            return <MenuLink {...link} />;
                        })}
                    </ul>
                </nav>
            </div>

            <div className="flex flex-col gap-8 mb-10">
                <span className="flex flex-row gap-2">
                    <CircleHelp /> Help
                </span>
                <span className="flex flex-row gap-2">
                    <Settings />
                    Settings
                </span>
            </div>
        </div>
    );
}
