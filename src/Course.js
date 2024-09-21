import React from "react";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import CSharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";

import "./Course.css";

const courseMap = {
  // key ve value değerleri eşit olduğu için sadece birini yazmak yeterli.
  Angular: Angular,
  Bootstrap: Bootstrap,
  CSharp: CSharp,
  Kompleweb: Kompleweb
};

function Course({ courseName }) {
  return ( 
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="course"></img>
    </div>
  );
}
export default Course;
