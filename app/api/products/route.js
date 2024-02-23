import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/ProductsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function POST(request) {
  const { name, category, punch, date, image, reason } = await request.json();
  await connectMongoDB();
  await Product.create({ name, category, punch, image, date, reason });
  return NextResponse.json({ massage: "Created" }, { status: 201 });
}
export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({ products });
}
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ massge: "deleted" }, { status: 200 });
}


