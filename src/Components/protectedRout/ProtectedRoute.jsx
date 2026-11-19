import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../dataProvider/DataProvider";

function ProtectedRoute({ children, msg, redirect }) {
  const [{ user }, distpath] = useContext(DataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/signin", { state: { msg, redirect } });
    }
  }, [user]);

  return children;
}

export default ProtectedRoute;
