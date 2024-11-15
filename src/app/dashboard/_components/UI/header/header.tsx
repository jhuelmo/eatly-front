import React from "react";

export default function Header({ title = "" }: { title: string | undefined }) {
    return (
        <div>
            <span>{title}</span>
        </div>
    );
}
