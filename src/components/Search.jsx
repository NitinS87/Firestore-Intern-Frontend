import axios from "axios";
import React, { useState } from "react";
import MainTable from "./MainTable";

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  async function handleSubmit(e) {
    console.log("Function clicked");
    e.preventDefault();
    if (search === "") return;

    await axios
      .get(`hhttps://firestore-intern-server-fevy2vggp-nitins87.vercel.app/search/${search}`)
      .then((response) => {
        const array = [];
        array.push(response.data);
        setData(array);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <div className="mx-auto w-[80%]">
        <h2 className="text-lg py-2">Search your documents: </h2>
        <form className="flex gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter your email"
            className="w-[60%] p-2 outline-none border border-gray-500 rounded-lg placeholder:text-lg"
          />
          <button
            className="bg-green-500 text-white p-2 rounded-xl text-lg hover:scale-110 ease-in-out duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="">
        {data && data.length > 0 ? (
          <MainTable data={data} />
        ) : (
          <div className="mx-auto w-[80%] text-lg py-2">No data to display</div>
        )}
      </div>
    </div>
  );
};

export default Search;
