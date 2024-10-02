import React, { useState } from "react";
import Button from "./Button";

const FormHandling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Name:",
      formData.name,
      "Email:",
      formData.email,
      "Password:",
      formData.password
    );
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="my-7">
      <h1 className="text-2xl font-bold my-3">Form Handling</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 items-center justify-center "
        action=""
      >
        <input
          name="name"
          value={formData.name}
          className="border-2 px-2 "
          type="text"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          name="email"
          value={formData.email}
          className="border-2 px-2 "
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          name="password"
          value={formData.password}
          className="border-2 px-2 "
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <Button text={"Submit"} />
      </form>
    </div>
  );
};

export default FormHandling;
