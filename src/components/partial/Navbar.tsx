"use client"
import React from 'react';
import {Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {useUser, currentUser, UserButton} from "@clerk/nextjs";
import {ThemeSwitcher} from "@/components/shared/ThemeSwitcher";

const NavBar = () => {
    const {user, isLoaded, isSignedIn} = useUser();
    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <Link href="/" className="font-bold text-inherit">Bao House</Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <ThemeSwitcher/>
                {!isLoaded ? (
                    <NavbarItem>
                        <Button variant="light">
                            Loading...
                        </Button>
                    </NavbarItem>
                ) : isSignedIn ? (
                    <UserButton afterSignOutUrl="/"/>
                ) : (
                    <>
                        <NavbarItem>
                            <Link href="/sign-up">
                                Sign Up
                            </Link>
                        </NavbarItem>
                        <NavbarItem className="hidden lg:flex">
                            <Button variant="solid" color="primary">
                                <Link href="/sign-in" className="text-white">
                                    Sign In
                                </Link>
                            </Button>
                        </NavbarItem>
                    </>
                )}
            </NavbarContent>
        </Navbar>
    );
};

export default NavBar;
