"use client";
import React, { useState } from "react";
import SearchResult from "./SearchResult";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultArr, setResultArr] = useState([]);
  async function getResult() {
    let res = await SearchResult(searchTerm);
    setResultArr(res);
    console.log(resultArr);
  }
  return (
    <div>
      <form onSubmit={e=>e.preventDefault()}>
        <input
          type="text"
          className="shadow-xl shadow-slate-500 w-[75%] h-10 p-2 outline-none "
          placeholder="search...."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button
          className="p-2 text-white bg-orange-500 hover:cursor-pointer"
          onClick={getResult}
        >
          Search
        </button>
      </form>
      <div>
        {resultArr==""?<h1>لايوجد نتائج</h1>: <table className="table">
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
            {resultArr.map((res, i) => (
              <tr className="hover" key={i}>
                <td>{i + 1}</td>
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
                  <RemoveBtn id={res._id} />
                </th>
              </tr>
            ))}
          </tbody>
        </table>}
      </div>
    </div>
  );
}

export default Search;
