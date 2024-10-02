import React from "react";
import useFetch from "../CustomHooks/useFetch.js";

const UseFetch = () => {
  const [data, loading, error] = useFetch(
    "https://picsum.photos/v2/list?page=2&limit=10"
  );
  if (loading) {
    return <p>Loading! please wait...</p>;
  }
  if (error) {
    return <p className="text-red-500">Error Occured! {error}</p>;
  }

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((item, index) => {
          return <li key={index}> {item.id}</li>;
        })}
      </ul>
    </div>
  );
};

export default UseFetch;
