import Image from "next/image";

export default function CartPage() {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-full p-4 flex flex-col justify-center  lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* single item */}
        <div
          className="flex items-center
         justify-between mb-4 "
        >
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Siciliana</h1>
            <span>Grande</span>
          </div>
          <h2 className="font-bold">R$79.90</h2>
          <span className="cursor-pointer">x</span>
        </div>
        {/* single item */}
        <div
          className="flex items-center
         justify-between mb-4 "
        >
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Siciliana</h1>
            <span>Grande</span>
          </div>
          <h2 className="font-bold">R$79.90</h2>
          <span className="cursor-pointer">x</span>
        </div>
        {/* single item */}
        <div
          className="flex items-center
         justify-between mb-4 "
        >
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Siciliana</h1>
            <span>Grande</span>
          </div>
          <h2 className="font-bold">R$79.90</h2>
          <span className="cursor-pointer">x</span>
        </div>
      </div>

      {/* Pagamento CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center  lg:h-full lg:w-1/3 2xl:w-1/2 ">
        <div className="flex justify-between">
          <span className="">Subtotal (3 itens)</span>
          <span className="">R$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Serviço</span>
          <span className="">R$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Entrega</span>
          <span className="text-green-500">GRÁTIS!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL</span>
          <span className="font-bold">R$81.70</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
