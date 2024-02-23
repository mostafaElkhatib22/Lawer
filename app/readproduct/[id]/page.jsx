import Image from "next/image";
import Link from "next/link";

import React from "react";
const Readproducts = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("error");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
async function ReadProduct({ params }) {
  const { id } = params;
  const { product } = await Readproducts(id);
  const { name, category, image, punch, date, reason } = product;
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-end mr-1 mt-5 gap-10 border-8 border-sky-900 max-w-2xl h-auto">
        <h1 className="font-extrabold text-2xl">الاسم : {name}</h1>
        <h1 className="font-extrabold text-2xl">الوظيفة : {category}</h1>
        <h1 className="font-extrabold text-2xl">العقوبة : {punch}</h1>
        <h1 className="font-extrabold text-2xl">التاريخ : {date}</h1>
        <p className="font-extrabold text-2xl">السبب : {reason}</p>
        {!image ? (
          <h1 className="font-extrabold text-2xl">لا يوجد صورة</h1>
        ) : (
          <Link href={image}>
            <Image
              src={image}
              alt={"image"}
              width={1000}
              height={250}
              className="rounded-m "
            />
          </Link>
        )}
      </div>
      <div className="flex flex-row mb-20 mt-3">
        <Link href={`/editProduct/${product._id}`}>
          <button type="button" className="btn btn-success">
            Edite
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ReadProduct;
