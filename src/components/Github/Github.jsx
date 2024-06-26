import { useLoaderData } from "react-router-dom";
//import React, { useState, useEffect } from "react";
function Github() {
  const data = useLoaderData();
  /* you can fetch this way but another way using loader gives more optimization
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
    .then((res) => res.json())
    .then(data=>{console.log(data); setData(data)})
  }, []);*/
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <h1>Name : {data.name}</h1>
      <h2> Github Location :{data.location}</h2>
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/prateekpradhan80`);
  return response.json();
};
