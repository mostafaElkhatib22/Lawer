"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
function EditProductsForm({ reason, date, image, punch, category, name, id }) {
  const [newName, setNewname] = useState(name);
  const [newImage, setNewImage] = useState(image);
  const [newDate, setNewDate] = useState(date);
  const [newPunch, setNewPunch] = useState(punch);
  const [newCategory, setNewCategory] = useState(category);
  const [newReason, setNewReason] = useState(reason);
  const router = useRouter();
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newName,
          newReason,
          newImage,
          newCategory,
          newPunch,
          newDate,
        }),
      });
      if (!res.ok) {
        throw new Error("faild");
      }
      Swal.fire({
        position: "center",
        icon: "success",
        title: "تم التحديث",
        showConfirmButton: false,
        timer: 870,
      });
      router.push("/products");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <>
        <div className="flex justify-between items-center">
          <h1 className="font-bold py-10 text-2xl">Update the ({name})</h1>
        </div>
        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-3 justify-center items-center"
        >
          <input
            value={newName}
            onChange={(e) => {
              setNewname(e.target.value);
            }}
            type="text"
            placeholder="اســــم الموظف"
            className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <input
            value={newImage}
            onChange={(e) => {
              setNewImage(e.target.value);
            }}
            type="text"
            placeholder="صورة القرار"
            className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <input
            value={newCategory}
            onChange={(e) => {
              setNewCategory(e.target.value);
            }}
            type="text"
            placeholder="الوظيفة"
            className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <input
            value={newPunch}
            onChange={(e) => {
              setNewPunch(e.target.value);
            }}
            type="text"
            placeholder="العقوبة"
            className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <textarea
            value={newReason}
            onChange={(e) => {
              setNewReason(e.target.value);
            }}
            placeholder="السبب"
            className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <input
            value={newDate}
            onChange={(e) => {
              setNewDate(e.target.value);
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
            Update Product
          </button>
        </form>
      </>
    </div>
  );
}

export default EditProductsForm;
