"use client"; // Ensure this is a client component
import React, { useState } from "react";
import axios from "axios"; // Make sure axios is imported
import { useRouter } from "next/navigation"; // Use the correct import from 'next/navigation'

const CreateUserPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:8000/create",
        formData
      );
      setSuccess("User created successfully!");
      setFormData({ name: "", email: "", password: "" }); // Reset form
      // Navigate to the homepage after successful creation
      router.push("/");
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-center font-bold text-2xl py-3">Create User</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 max-w-[700px] border-2 p-7 rounded-xl mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border px-2 py-1"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border px-2 py-1"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="border px-2 py-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          {loading ? "Creating..." : "Create User"}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
};

export default CreateUserPage;
