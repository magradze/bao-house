import Image from "next/image";
import {Button} from "@nextui-org/react";
import {UserButton} from "@clerk/nextjs";
import MenuButton from "@/components/shared/MenuButton";

export default function Home() {
    return (
        <main className="flex flex-col items-center h-full -translate-y-20 p-20 justify-center">
            <MenuButton/>
        </main>
    );
}
