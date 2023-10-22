import React from "react";
import Image from "next/image";
import header from "../../public/img/header.png";

export default function SectionHeader () {
    return (
        <>
        <div className="py-20">
            <Image alt="header" src={header} />
        </div>
        </>
    )
}