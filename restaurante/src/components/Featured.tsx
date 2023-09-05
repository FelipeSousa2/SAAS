import { featuredProducts } from "@/data";
import Image from "next/image";

export default function Featured() {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* Image container */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="object-contain p-4"
                />
              </div>
            )}
            {/* Text Container */}
            <div className="flex-1 flex flex-col items-center text-center gap-4 justify-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">{item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
