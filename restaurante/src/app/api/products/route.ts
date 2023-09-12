import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

//BUSCAR TODAS AS PRODUCTS
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(cat ? { catSlug: cat } : { isFeatured: true }),
      },
    });
    return new NextResponse(JSON.stringify(products), { status: 200 });
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
