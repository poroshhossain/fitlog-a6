import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-cDark text-cLight">
            <h2 className="text-red-500 text-2xl">Page Not Found</h2>
            <p>Could not find requested resource</p>

            <Link href="/" className='bg-cPrimary text-cDark py-3 px-4 rounded-2xl font-Inter mt-5' >
                Return Home
            </Link>
        </div>
    )
}