import React, { useState } from "react";

const StudentData = ({ name, render }) => {
  const [rank, setRank] = useState(10);
  const studentNames = ["abc", "mno", "xyz"];

  return (
    <div>
      <h2>Name : {name}</h2>
      <h3>{rank}</h3>
      {rank <= 14 && (
        <button onClick={() => setRank(rank + 1)}>Increase Rank</button>
      )}
      {studentNames.map((stdName, index) => (
        <h4 key={index}>{stdName}</h4>
      ))}
      {render()}
    </div>
  );
};

export default StudentData;
