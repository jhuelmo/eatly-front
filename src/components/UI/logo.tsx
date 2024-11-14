import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
    return (
        <Link className="flex items-center gap-3" href="/dashboard">
            <Image src="/eatly-logo.svg" alt="Eatly" width={32} height={32} />
            <h2 className="text-primary">eatly</h2>
        </Link>
    );
}

export { Logo };
