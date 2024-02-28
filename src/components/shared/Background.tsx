import React from 'react';
import Image from "next/image";
import farnebi from "@/assets/images/bgline.svg"
import rotatedBg from "@/assets/images/rotatedbg.svg"
import topflower from "@/assets/images/topflower.svg"
import bottomflower from "@/assets/images/bottomflower.svg"

const Background = () => {
    return (
        <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center z-0">
            <div className="relative max-w-7xl w-full p-4">
                <Image src={topflower} alt={""}
                       className="absolute top-16 -right-14 rotate-90 md:top-10 md:left-0 w-52 md:w-1/2 md:rotate-0"/>
                <Image src={bottomflower} alt={""}
                       className="absolute rotate-90 bottom-20 w-52 -left-14 md:bottom-0 md:right-0 md:left-auto md:w-1/2 md:rotate-0"/>
            </div>
        </div>
    );
};

export default Background;
