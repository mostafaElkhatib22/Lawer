"use client";
import { useRouter } from "next/navigation";
import "@/app/globals.css";
import React, { useState } from "react";
import Swal from "sweetalert2";
function AddProducts() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [category, setCategory] = useState("");
  const [punch, setPunch] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();
  const handleSubmite = async (e) => {
    e.preventDefault();
    if (!name || !punch) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "يرجى ملئ الحقول",
      });
      return;
    }
    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, date, image, category, punch, reason }),
    });
    if (res.ok) {
      router.push("/products");
      router.refresh();
    } else {
      throw new Error("faild to create a products");
    }

  };
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold py-10 text-2xl">Add new product</h1>
      </div>
      <form
        onSubmit={handleSubmite}
        className="flex flex-col gap-3 justify-center items-center"
      >
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="اســــم الموظف"
          className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <input
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          type="text"
          placeholder="صورة القرار"
          className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <input
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          type="text"
          placeholder="الوظيفة"
          className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <input
          value={punch}
          onChange={(e) => {
            setPunch(e.target.value);
          }}
          type="text"
          placeholder="العقوبة"
          className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <textarea
          value={reason}
          onChange={(e) => {
            setReason(e.target.value);
          }}
          type="text"
          placeholder="السبب"
          className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <input
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          type="text"
          placeholder="التاريخ"
          className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        
        <button
          type="submit"
          className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
        >
          {" "}
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProducts;
