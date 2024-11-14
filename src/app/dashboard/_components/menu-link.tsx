"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuLink({ name, path, icon }: TMenuLink) {
    const currentPath = usePathname();

    const isActive = (href: string) => currentPath === href;
    console.log(path, currentPath);
    return (
        <li
            className={`flex rounded-xl  my-2 ${
                isActive(path)
                    ? "bg-primary text-primary-contrast"
                    : "hover:bg-primary/50 hover:text-primary-contrast"
            }`}
            key={name}
        >
            <Link
                href={path}
                className="inline-flex p-2 pl-3 gap-2 items-center flex-grow"
            >
                {icon}
                <span className="text-lg">{name}</span>
            </Link>
        </li>
    );
}
