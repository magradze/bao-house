import Image from "next/image";
import {Button} from "@nextui-org/react";
import {UserButton} from "@clerk/nextjs";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <Button color="primary">
                Bao house
            </Button>

            <UserButton afterSignOutUrl="/"/>
        </main>
    );
}
