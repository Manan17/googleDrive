"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
const SearchBar = ({
  setFAndF,
  setSearchText,
  searchText,
  initialData,
  filesPart,
}) => {
  const [sort, setSort] = useState("sort");
  useEffect(() => {
    let d;
    switch (sort) {
      case "sort": {
        setFAndF(initialData);
        break;
      }
      case "folders": {
        d = initialData.filter((t) => t.type === "folder");
        setFAndF(d);
        break;
      }
      case "files": {
        d = initialData.filter((t) => t.type === "file");
        setFAndF(d);
        break;
      }
      case "date": {
        d = [...initialData].sort((d1, d2) =>
          moment.utc(d1.createdAt).diff(moment.utc(d2.createdAt))
        );
        setFAndF(d);
        break;
      }
      case "size":
        {
          d = [...initialData].sort((s1, s2) => s1.size - s2.size);
          setFAndF(d);
        }
        break;
      default:
        break;
    }
  }, [sort]);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg w-[400px] m-4 border">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border-transparent focus:border-transparent focus:ring-0 outline-none w-full"
        />
      </div>
      <select
        onChange={(e) => {
          setSort(e.target.value);
        }}
      >
        <option value="sort">Sort</option>
        {!filesPart && (
          <>
            <option value="folders">Folders</option>
            <option value="files">Files</option>
          </>
        )}
        <option value="size">Size</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
};

export default SearchBar;
