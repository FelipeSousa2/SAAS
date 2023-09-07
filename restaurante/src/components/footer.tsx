import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-1/2 md:h-24 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        DUCCA MASSAS
      </Link>
      <p>©️ TODOS OS DIREITOS RESERVADOS.</p>
    </div>
  );
}
