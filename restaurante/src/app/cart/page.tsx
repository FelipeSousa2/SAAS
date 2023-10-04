"use client";
import { useCartStore } from "@/utils/store";
import Image from "next/image";
import React from "react";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-full p-4 flex flex-col justify-center  lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* single item */}
        {products.map((item) => (
          <div
            className="flex items-center
         justify-between mb-4 "
            key={item.id}
          >
            {item.img && (
              <Image src={item.img} alt="" width={100} height={100} />
            )}
            <div className="">
              <h1 className="uppercase text-xl font-bold">{item.title}</h1>
              <span>{item.optionTitle}</span>
            </div>
            <h2 className="font-bold">R${item.price}</h2>
            <span
              className="cursor-pointer"
              onClick={() => removeFromCart(item)}
            >
              X
            </span>
          </div>
        ))}
      </div>

      {/* Pagamento CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center  lg:h-full lg:w-1/3 2xl:w-1/2 ">
        <div className="flex justify-between">
          <span className="">Subtotal ({totalItems} itens)</span>
          <span className="">R${totalPrice}</span>
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
          <span className="font-bold">R${totalPrice}</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
