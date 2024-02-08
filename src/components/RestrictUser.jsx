

import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";


const RestrictUser = () => {

  const navigate = useNavigate();
  const token = document.cookie.split("=")[1];
  useEffect(() => {

    if (!token) {
      navigate("/auth");
    }
  }, [token]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default RestrictUser;
