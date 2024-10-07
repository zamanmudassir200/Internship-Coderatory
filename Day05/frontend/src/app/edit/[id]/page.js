"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const EditUserPage = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/users/${id}`);
        setUserData({ ...response.data, id: response.data._id });
      } catch (err) {
        setError(err.response ? err.response.data.message : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { id, ...updatedData } = userData; // Exclude id from the update request
      const response = await axios.patch(
        `http://localhost:8000/update/${id}`,
        updatedData // Only send name, email, and password
      );
      console.log(response.data);
      router.push("/"); // Redirect to home after update
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="font-bold">Loading! please wait...</p>;
  }
  if (error) {
    return <p className="text-red-500 font-bold">Error occurred! {error}</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-center font-bold text-2xl py-3">Edit User</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 max-w-[700px] border-2 p-7 rounded-xl mx-auto"
      >
        <input
          type="text"
          name="id"
          value={userData.id}
          readOnly // Make the ID field read-only
          className="border px-2 py-1 bg-gray-200" // Optional: style it to indicate it's read-only
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name}
          onChange={handleChange}
          required
          className="border px-2 py-1"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          required
          className="border px-2 py-1"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          required
          className="border px-2 py-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          {loading ? "Updating..." : "Update User"}
        </button>
      </form>
    </div>
  );
};

export default EditUserPage;
