import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(8);
  const [country, setCountry] = useState("");
  const [university, setUniversity] = useState("");
  const [year, setYear] = useState(1977);
  const [id, setId] = useState(200);

  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    const reactData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      age: age,
      country: country,
      university: university,
      yearOfGrad: year,
      id: id,
    };

    axios
      .post("https://firestore-intern-server-fevy2vggp-nitins87.vercel.app/create", reactData)
      .then((res) => {
        console.log("Data send");
        setFirstName("");
        setLastName("");
        setEmail("");
        setAge(8);
        setCountry("");
        setUniversity("");
        setYear(1977);
        setId(200);

        setMessage("Data sended successfully");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.data);
        setMessage("Some error occured");
      });
  };
  return (
    <div className="mx-auto w-[80%]">
      <h2 className="text-gray-500 text-lg">Enter your details: </h2>
      <form className="flex flex-col gap-2 items-start" onSubmit={handleSubmit}>
        <div className="my-2 grid grid-cols-2">
          <label htmlFor="id" className="text-lg">
            Id:
          </label>
          <input
            type="number"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            min={200}
            className="border border-gray-400/60 outline-none px-2 rounded-md ml-2"
          />
        </div>
        <div className="my-2 grid grid-cols-2">
          <label htmlFor="first_name" className="text-lg">
            First name:
          </label>
          <input
            type="text"
            name="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray-400/60 outline-none px-2 rounded-md ml-2"
          />
        </div>
        <div className="my-2 grid grid-cols-2">
          <label htmlFor="last_name" className="text-lg">
            Last name:
          </label>
          <input
            type="text"
            name="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray-400/60 outline-none px-2 rounded-md ml-2"
          />
        </div>
        <div className="my-2 grid grid-cols-2">
          <label htmlFor="email" className="text-lg">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400/60 outline-none px-2 rounded-md ml-2"
          />
        </div>
        <div className="my-2 grid grid-cols-2">
          <label htmlFor="age" className="text-lg">
            Age:
          </label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min={8}
            className="border border-gray-400/60 outline-none px-2 rounded-md ml-2"
          />
        </div>
        <div className="my-2 grid grid-cols-2">
          <label htmlFor="country" className="text-lg">
            Country:
          </label>
          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border border-gray-400/60 outline-none px-2 rounded-md ml-2"
          />
        </div>
        <div className="my-2 grid grid-cols-2">
          <label htmlFor="university" className="text-lg">
            University:
          </label>
          <input
            type="text"
            name="university"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            className="border border-gray-400/60 outline-none px-2 rounded-md ml-2"
          />
        </div>
        <div className="my-2 grid grid-cols-2">
          <label htmlFor="year_of_grad" className="text-lg">
            Year of Graduation:
          </label>
          <input
            type="number"
            name="year_of_grad"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            min={1977}
            className="border border-gray-400/60 outline-none px-2 rounded-md ml-2"
          />
        </div>

        <button
          type="submit"
          className="p-2 bg-blue-500 rounded-xl hover:scale-110 w-56 text-white ease-in-out duration-300"
        >
          Submit!
        </button>
      </form>

      <div className="message">
        {message ? (
          <p className="text-lg ease-in duration-200">{message}</p>
        ) : null}
      </div>
    </div>
  );
};

export default Form;
