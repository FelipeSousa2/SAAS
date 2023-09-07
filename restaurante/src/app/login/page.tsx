import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* Box */}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-full md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* image container */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/* form container */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Bem-vindo</h1>
          <p>
            Faça login na sua conta ou crie uma nova utilizando os botões
            sociais.
          </p>
          <button className="flex gap-4 p-4 ring-orange-100 rounded-md">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Faça login no Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Faça login no Facebook</span>
          </button>
          <p className="text-sm">
            Algum problema?
            <Link className="underline" href="/">
              {" "}
              Contate-nos
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
