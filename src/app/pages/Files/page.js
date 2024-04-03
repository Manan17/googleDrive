"use client";
import FileFolder from "@/app/components/FileFolder";
import React, { useState } from "react";
import { dummy } from "@/app/constants/dummyData";
import SearchBar from "@/app/components/SearchBar";
const Files = ({ searchParams }) => {
  // Usually (with the backend) here we get the id and then we call an api lets say /api/v1/folders/:id where id=searchParams and get those files.
  let files = dummy?.filter((data) => data.id == searchParams.id);
  files = files[0].files;
  const [searchText, setSearchText] = useState("");
  const [fAndF, setFAndF] = useState([]);
  return (
    <>
      <h1 className="text-center text-lg mb-4 mt-4">Welcome to Drive</h1>
      <SearchBar
        setFAndF={setFAndF}
        searchText={searchText}
        setSearchText={setSearchText}
        initialData={files}
        filesPart={true}
      />
      <div className="flex justify-evenly">
        {fAndF?.length > 0 ? (
          fAndF
            ?.filter((data) =>
              data.name.toLowerCase().includes(searchText.toLowerCase())
            )
            ?.map((data) => <FileFolder data={data} key={data?.id} />)
        ) : (
          <h1>No files found</h1>
        )}
      </div>
    </>
  );
};

export default Files;
