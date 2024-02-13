"use client";

import axios from "axios";
import { FunctionComponent } from "react";

export const ChangePass: FunctionComponent = () => {
  const handleSubmit = async () => {
    const result = await axios.patch(
      "http://localhost:3001/api/users/97xmn7i4lyoy/password",
      {
        password: "password80171",
      },
      {
        withCredentials: true,
      },
    );

    console.log(result);
  };

  return (
    <div className="w-96">
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
