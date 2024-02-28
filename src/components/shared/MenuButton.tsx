"use client"
import React from 'react';
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg"
import {motion} from "framer-motion"
import Link from "next/link";

const MenuButton = () => {
    return (
        <Link href={"#"}>
            <motion.div
                whileHover={{scale: 1.1, transition: {duration: 0.5}, rotate: 10, opacity: 1}}
                whileTap={{scale: 0.95}}
                className="cursor-pointer"
            >
                <Image src={logoImage} alt={""} width={350} height={350}/>
            </motion.div>
        </Link>
    );
};

export default MenuButton;
