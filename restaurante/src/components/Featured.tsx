import Image from "next/image";

export default function Featured() {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single item */}
        <div className="w-screen h-[60vh] flex flex-col items-center justify-around">
          {/* Image container */}
          <div className="relative flex-1 w-full">
            <Image
              src="/temporary/p1.png"
              alt=""
              fill
              className="object-contain p-4"
            />
          </div>
          {/* Text Container */}
          <div className="flex-1 flex flex-col gap-4 ">
            <h1 className="text-xl font-bold uppercase">Title</h1>
            <p>Desc</p>
            <span className="text-xl font-bold">R$ 123</span>
            <button className="bg-red-500 text-white p-2 rounded-md">Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
