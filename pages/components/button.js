import Link from "next/link"
const Button = ({
    label,
    href,
    className
}) => {
    const baseStyle = "bg-[#1e1e1e] m-4 p-2 px-8 text-lg rounded-xl font-semibold"
    if (className) {
        <button
            className={`${className}`}
        >
            <Link href={href}>
                {label}
            </Link>
        </button>
    }
    return (
        <button
            className={`${baseStyle}`}
        >
            <Link href={href}>
                {label}
            </Link>
        </button>
    )
}
export default Button