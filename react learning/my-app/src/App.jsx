import { useState } from "react";
import Student from "./components/Student";

function App() {
  const [students] = useState([
    { name: "ABC", progress: 25 },
    { name: "XYZ", progress: 15 },
  ]);

  return (
    <div>
      <h1>Student List</h1>
      {students.map((student, index) => {
        return <Student key={index} name={student.name} progress={student.progress} />;
      })}
    </div>
  );
}

export default App;
