import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";

function Courses() {
  return (
    <>
      <div>
        <Navbar />
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
