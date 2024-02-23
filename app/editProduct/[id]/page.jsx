import EditProductsForm from "@/components/EditProductsForm";
import React from "react";
const UpdataProduct = async (id) => {
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

async function EditProduct({ params }) {
  const { id } = params;
  const { product } = await UpdataProduct(id);
  const { name, category, image, punch, date, reason } = product;
  return (
    <div>
      <EditProductsForm
        id={id}
        name={name}
        category={category}
        image={image}
        punch={punch}
        date={date}
        reason={reason}
      />
    </div>
  );
}

export default EditProduct;
