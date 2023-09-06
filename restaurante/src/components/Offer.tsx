import Image from "next/image";
import CountDown from "./CountDown";

export default function Offer() {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* Text container */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicioso Hambúrguer e Batata Frita
        </h1>
        <p className="text-white xl:text-xl">
          Simplifique gradualmente os métodos eficazes de trabalho online e
          concentre-se no empoderamento através do processo. Avance rapidamente
          em várias frentes.
        </p>
        <CountDown />
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Peça agora
        </button>
      </div>
      {/* Image container */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}
