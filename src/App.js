import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainTable from "./components/MainTable";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Search from "./components/Search";

function App() {
  const [data, setData] = useState([]);
  const url = "https://firestore-intern-server-fevy2vggp-nitins87.vercel.app/read/all";
  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      // console.log(response.data);
    });
    console.log("launched");
  }, []);
  return (
    <div className="relative min-h-screen min-w-full w-full overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<MainTable data={data} />} />
        <Route path="/create" element={<Form />} />
        <Route path="/search" exact element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
