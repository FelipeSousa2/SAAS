import Link from "next/link";

export default function Footer() {
    return (
      <div className="h-1/2 md:h-24 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">DUCCA MASSAS</Link>
        <p>©️ TODOS OS DIREITOS RESERVADOS.</p>
      </div>
    )
  }
  