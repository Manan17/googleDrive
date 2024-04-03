"use client";
import { useState } from "react";
import FileFolder from "./components/FileFolder";
import SearchBar from "./components/SearchBar";
import { dummy } from "./constants/dummyData";
export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [fAndF, setFAndF] = useState([]);

  return (
    <main className="mt-4 px-6">
      <h1 className="text-center text-lg mb-4">Welcome to Drive</h1>
      <SearchBar
        setFAndF={setFAndF}
        setSearchText={setSearchText}
        searchText={searchText}
        initialData={dummy}
      />
      <div className="flex justify-between flex-wrap">
        {fAndF
          ?.filter((data) =>
            data.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((data) => (
            <FileFolder data={data} key={data.id} />
          ))}
      </div>
    </main>
  );
}
