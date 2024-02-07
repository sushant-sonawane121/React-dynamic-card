import "./App.css";
import CardData from "./CardData";
import { useState, useEffect } from "react";

function App() {
  const [scourse, setScourse] = useState("");

  const uniqueCourses = [...new Set(CardData.map((data) => data.course))];

  const courses = uniqueCourses.map((course, index) => {
    return (
      <option key={index} value={course}>
        {course}
      </option>
    );
  });

  const filteredCard = CardData.filter((data) => {
    return data.course === scourse;
  });

  const handleOption = (e) => {
    setScourse(e.target.value);
    
  };

useEffect(()=>{
  console.log(scourse);
},[scourse])
  return (
    <>
      <div>
        <select onChange={handleOption} value={scourse}>
          <option value="" >Select Course</option>
          {courses}
        </select>
      </div>

      <section className="card-section">
        <div className="card-container">
        {scourse === "" ? (
            CardData.map((data) => (
              <div className="card" key={data.id}>
                <h1>{data.username}</h1>
                <p>{data.email}</p>
                <h3>{data.course}</h3>
              </div>
            ))
          ) : (
            filteredCard.map((data) => (
              <div className="card" key={data.id}>
                <h1>{data.username}</h1>
                <p>{data.email}</p>
                <h3>{data.course}</h3>
              </div>
            ))
          )}
          
        </div>
      </section>
    </>
  );
}

export default App;
