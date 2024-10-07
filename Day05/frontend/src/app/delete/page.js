"use client";
import React, { useState, useEffect } from "react";

const page = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (loading) {
    return <p className="font-bold">Loading! please wait...</p>;
  }
  if (error) {
    return <p className="text-red-500 font-bold">Error occured! {error}</p>;
  }
  const fetchData = async () => {
    try {
      const response = await axios.delete("http://localhost:8000/delete");
      console.log(response);
      setUsers(response.data.message);
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>delete PAGE</div>;
};

export default page;
