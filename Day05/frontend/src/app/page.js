"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdDelete } from "react-icons/md";

import { CiRead } from "react-icons/ci";

import { FaEdit } from "react-icons/fa";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      console.log(response);
      setUsers(response.data);
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-slate-400 p-10 min-h-screen">
      <h1 className="text-2xl text-center font-bold underline ">
        Basic CRUD Operations
      </h1>
      <div className=" my-7 flex items-center justify-evenly">
        <Link
          className=" flex items-center justify-center gap-2  p-2 bg-white rounded-lg hover:bg-black hover:text-white transition-all duration-150"
          href="/create"
        >
          Create ➕
        </Link>
      </div>
      <hr />
      <div className="  p-4  grid sm:grid-cols-2  gap-3 md:grid-cols-3 lg:grid-cols-4 ">
        {users && users.length > 0 ? (
          users.map((user, index) => {
            return (
              <div
                className=" break-all flex flex-col justify-between gap-5  font-semibold min-w-56 p-3 min-h-40 hover:bg-slate-400 transition-all  rounded-xl border-2"
                key={user._id}
              >
                <div className="">
                  <p>
                    <i>ID: {user._id}</i>
                  </p>
                  <h1>NAME: {user.name}</h1>
                  <p>Email: {user.email}</p>
                  <p>Password : {user.password}</p>
                </div>
                <div className="flex gap-2 items-center justify-between align-bottom">
                  <Link
                    className="self-stretch flex items-center justify-center gap-2  p-2 bg-white rounded-lg hover:bg-black hover:text-white transition-all duration-150"
                    href="/read"
                  >
                    <CiRead />
                  </Link>
                  <Link
                    className=" flex items-center justify-center gap-2  p-2 bg-white rounded-lg hover:bg-black hover:text-white transition-all duration-150"
                    href={`/edit/${user._id}`}
                  >
                    <FaEdit />
                  </Link>

                  <Link
                    className=" flex items-center justify-center gap-2  p-2 bg-white rounded-lg hover:bg-black hover:text-white transition-all duration-150"
                    href="/delete"
                  >
                    <MdDelete />
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="font-bold text-2xl">No users found</h1>
        )}
      </div>
    </div>
  );
}
