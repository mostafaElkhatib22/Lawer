"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
function RemoveBtn({ id }) {
  const router = useRouter();
  const removeProduct = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
          method: "DELETE",
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        if(res.ok){
          router.refresh()
         }
      }
    });
  };
  return (
    <div>
      <button
        type="button"
        onClick={removeProduct}
        className="btn btn-error ml-2"
      >
        Delete
      </button>
    </div>
  );
}

export default RemoveBtn;
