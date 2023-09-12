import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//BUSCAR TODAS AS CATEGORIAS
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Somethind went wrong!" }),
      { status: 500 }
    );
  }
};
export const POST = () => {
  return new NextResponse("Hello", { status: 200 });
};
