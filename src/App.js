import { useState } from "react";
import "./App.css";
import Course from "./Course";


function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "CSharp", "Kompleweb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}
 
function App() {
  const [courses, setCourses] = useState([]);

  // handleClick ile yeni courseları random olarak getir. Mevcut courseların üzerine yaz. 

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  
  };
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  })
  return (
    <div className="App">
      {/* Butona tıkladığımızda handleClick eventi çalışır. */}
      <button className="addButton" onClick={handleClick}>Kurs Ekle</button>
      <div className="courseList">{courseList}</div>
    </div>
  );
} 

export default App;
