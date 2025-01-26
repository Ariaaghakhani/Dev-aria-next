import Link from "next/link";

export default function Header() {
    return (
        <header className="text-2xl font-bold py-10 flex justify-center">
            <Link href={'/'}>
                <span className="text-blck">DEV</span>
                <span className="text-gry">ARIA
                        <sup className="box-decoration-clone">©</sup>
                    </span>
            </Link>
        </header>
    )
}