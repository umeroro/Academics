import React, { useEffect } from "react";
import StudentData from "./components/StudentData";

const App = () => {

  useEffect(()=>{
    console.log('This is the UseEffect');
  },[StudentData])

  return (
    <div>
      <h1>
        Learn React By Following{" "}
        <a href="https://RoadMap.sh/react" target="_blank">
          RoadMap.sh
        </a>
      </h1>
      <StudentData
        name={"ummorro"}
        render={() => (
          <h5>This is the Render Props. Passing from parent to child</h5>
        )}
      />
    </div>
  );
};

export default App;
