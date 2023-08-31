import Link from "next/link";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b- border-b-red-500 uppercase">
      {/* Logo */}
      <div className="text-xl">
        <Link href="/">Massimo</Link>
      </div>
      {/* Mobile Menu */}
      <div>
        <Menu />
      </div>
    </div>
  );
}
