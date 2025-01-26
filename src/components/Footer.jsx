'use client'

import Link from "next/link";
import {useEffect, useState} from "react";

export default function Footer(){
    let dateYear = new Date
    const [date,setDate] = useState(dateYear.getFullYear())
    useEffect(() => {
    }, []);
    return (
        <footer className="max-w-[80rem] py-[2.25rem] px-8 mx-auto text-gry [font-size:14px] font-bold">
            <div className="w-full flex justify-between">
                <div className="max-w-1/4">
                    <Link href="/" className="text-2xl font-bold">
                        <span className="text-blck">DEV</span>
                        <span className="text-gry">ARIA
                        <sup className="box-decoration-clone">©</sup>
                    </span>
                    </Link>
                </div>
                <ul className="w-1/3 text-gry flex items-center justify-between *:flex *:items-center *:h-full *:mx-4 *:text-sm *:font-bold">
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/about">ABOUT</Link></li>
                    <li><Link href="/work">WORK</Link></li>
                    <li><Link href="/service">SERVICE</Link></li>
                    <li><Link href="/contact">CONTACT</Link></li>
                </ul>
                <span className="flex items-center max-w-1/4">All Rights Reserved - {date} <sup>®</sup></span>
            </div>
        </footer>
    )
}