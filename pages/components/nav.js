import Link from "next/link";

const Nav = () => {
    return (
        <nav className="flex place-content-end-safe p-10 gap-10 text-lg">
            <Link href="/">
                Home
            </Link>
            <Link href="/tailwind.next">
                Tailwind CSS
            </Link>
            <Link href="/next">
                Next.js
            </Link>
            <Link href="/" className="text-gray-500">
                In development
            </Link>
        </nav>
    );
}

export default Nav