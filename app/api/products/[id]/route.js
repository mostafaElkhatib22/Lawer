import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/ProductsModel";
import { NextResponse } from "next/server";
export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newCategory: category,
    newPunch: punch,
    newImage: image,
    newDate: date,
    newReason: reason,
  } = await request.json();
  await connectMongoDB();
  await Product.findByIdAndUpdate(id, {
    image,
    category,
    name,
    punch,
    date,
    reason,
  });
  return NextResponse.json({ massage: "updated" }, { status: 200 });
}
export async function GET(requset, { params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}
