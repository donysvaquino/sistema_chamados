import { Children, useContext } from "react";
import { AuthContext } from "./contexts/auth";
import { Navigate } from "react-router-dom";

export default function Private({ children }) {
  const { signed, loading } = useContext(AuthContext);
  if (loading) {
    return(
        <div>
            <h1></h1>
        </div>
    )
  }
  if (!signed) return <Navigate to={"/"} />;    

  return children;
}
