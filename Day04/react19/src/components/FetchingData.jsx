import React, { useEffect, useState } from "react";

const FetchingData = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchingData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=10"
      );
      const data = await response.json();
      setLoading(false);
      setUser(data);
      console.log(data);
      console.log("User", user);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold my-3">Fetching Data</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 border-2 px-10">
        {error !== null && (
          <h1 className="font-bold text-xl text-red-700 text-center ">
            Error Occured! {error}
          </h1>
        )}
        {!loading ? (
          <center className="flex items-center justify-center">
            <h1 className="font-bold text-xl text-center ">
              Loading! please wait...
            </h1>
          </center>
        ) : (
          user.map((item, index) => (
            <div className="bg-gray-800 text-white rounded-lg" key={index}>
              <img src={item.download_url} className="w-full" />
              <p className="p-3" key={index}>
                id: {item.id} <br />
                Name: {item.author}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FetchingData;
