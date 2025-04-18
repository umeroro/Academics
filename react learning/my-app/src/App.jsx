import { useState } from "react";
import Student from "./components/Student";

function App() {
  const [students, setStudents] = useState([
    { name: "ABC", progress: 25 },
    { name: "MNO", progress: 15 },
    { name: "XYZ", progress: 10 },
  ]);

  const increaseProgress = (index) => {
    const newStudents = [...students];
    newStudents[index].progress += 5;
    setStudents(newStudents);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student List</h1>
      {students.map((student, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <Student name={student.name} progress={student.progress} />
          <button
            style={{ marginBottom: "10px" }}
            onClick={() => increaseProgress(index)}
          >
            Increase Progress
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;