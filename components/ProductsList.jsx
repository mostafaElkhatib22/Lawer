"use client"
import Link from "next/link";
import React, { useState } from "react";
import RemoveBtn from "./RemoveBtn";
import Search from "./Search";
const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("faild");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
async function ProductsList() {
  const {products} = await getProducts()

  return(
    <>
     <div className="overflow-x-auto mx-6">
        <div className="flex justify-between items-center">
          <h1 className="font-bold py-10 text-2xl">Lــawer</h1>
          <Link href={'/search'} className="btn btn-info">Search</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>الاسم</th>
              <th>الوظيفة</th>
              <th>العقوبة</th>
              <th>التاريخ</th>
            </tr>
          </thead>
          <tbody>
            {products.map((res,i) => (
              <tr className="hover" key={i}>
                <td>{i+1}</td>
                <td>{res.name}</td>
                <td>{res.category}</td>
                <td>{res.punch}</td>
                <td>{res.date}</td>
                <th className="flex justify-center items-center gap-3">
                  <Link href={`/editProduct/${res._id}`}>
                  <button type="button" className="btn btn-success">
                    Edite
                  </button>
                  </Link>
                  <Link href={`/readproduct/${res._id}`}>
                  <button type="button" className="btn btn-info">
                    Read
                  </button>
                  </Link>
                  <RemoveBtn id={res._id}/>
                  </th>
              </tr>
            )
            )}
          </tbody>
          </table>
        </div>
    
    </>
  )
}

export default ProductsList;
