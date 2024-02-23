"use server";
import React from "react";
import products from "../models/ProductsModel";
import mongoose from "mongoose";
async function SearchResult(str) {
  await mongoose.connect(process.env.MONGOOSE_URL);
  let searchTerm = str;
  const convertFirstLetter = (text) => {
    const convert = text.replace(/(^\w{1})|(\.\s*\w{1})/g, (match) =>
      match.toUpperCase()
    );
    return convert;
  };
  const searchTermFirst = convertFirstLetter(searchTerm);
  let results = await products.find({
    $or: [
      {
        name: { $regex: searchTerm },

      },
      {
        category: { $regex: searchTerm },

      },
      {
        date: { $regex: searchTerm },

      },
      {
        punch: { $regex: searchTerm },

      },
      {
        name: { $regex: searchTermFirst },
      },
    ],
  });
  return results;
}

export default SearchResult;
