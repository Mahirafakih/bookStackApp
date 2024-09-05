import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogOut = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users:");
      toast.success("Logged out Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error: " + error.message);
      console.log(error);
      setTimeout(() => {}, 2000);
    }
  };

  return (
    <>
      <div>
        <button
          className="px-3 py-2 bg-red-600 text-white rounded-md cursor-pointer"
          onClick={handleLogOut}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Logout;
