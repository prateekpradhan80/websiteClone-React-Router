import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return (
    <div className="text-center p-4 bg-blue-200 text-3xl">User :{userid} </div>
  );
}

export default User;
