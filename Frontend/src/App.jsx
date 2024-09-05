import React from "react";
import Homepage from "./home/Homepage";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Email from "./components/Email";

function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/email" element={<Email />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
