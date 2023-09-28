"use client";

import React, { useEffect, useState } from "react";

type Props = {
  price: number;
  id: string;
  options?: { title: string; additionalPrice: number }[];
};

export default function Price({ price, id, options }: Props) {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">R${total}</h2>
      {/* Options container */}
      <div className="flex gap-4">
        {options?.map((options, index) => (
          <button
            key={options.title}
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {options.title}
          </button>
        ))}
      </div>
      {/* Quantity and add button container */}
      <div className="flex justify-between items-center">
        {/* Quantity */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantidade</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* Cart button */}
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-400">
          Adicionar
        </button>
      </div>
    </div>
  );
}
