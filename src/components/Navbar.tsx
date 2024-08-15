"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>

                <HoveredLink href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">       
                    </MenuItem>
                </HoveredLink>

                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex flex-col space-y-4 text-md">
                        <HoveredLink href={"/"}>Guitar bootcamp</HoveredLink>
                        <HoveredLink href="/">Song Writing</HoveredLink>
                        <HoveredLink href="/">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/">Music Composition</HoveredLink>
                    </div>
                </MenuItem>

                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar
