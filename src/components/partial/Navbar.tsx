"use client"
import React from 'react';
import {Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";

const navBarItems = [
    {
        name: "歡迎 Accueil",
        href: "#",
    },
    {
        name: "選單 Menu",
        href: "#",
        isActive: true,
    },
    {
        name: "接觸 Contact",
        href: "#",
    },
];

const NavBar = () => {
    return (
        <Navbar
            style={{backgroundColor: "#f8d7a5"}}
            position="static" maxWidth="xl"
            className="border-b-0 border-secondary-950 bg-transparent z-50 absolute top-0">
            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                {navBarItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link color="primary" href={item.href} className="text-xl font-bold">
                            {item.name.toUpperCase()}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    );
};

export default NavBar;
