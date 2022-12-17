import Link from "next/link";
import MyButton from "./myButton";

export default function Navbar() {
    return (
        <div className="top-0 left-0 sticky fixed bg-white h-14 border-b flex items-center justify-between px-2 gap-2 shadow">
            <div className="flex gap-4">
                <Link href="/">
                    <MyButton>Home</MyButton>
                </Link>
                <Link href="/nijaz">
                    <MyButton>Nijaz</MyButton>
                </Link>
                <Link href="/munir">
                    <MyButton>Munir</MyButton>
                </Link>
            </div>
            <div>Options</div>
        </div>
    )
}