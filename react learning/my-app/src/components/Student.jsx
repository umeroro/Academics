function Student({ name, progress }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Progress: {progress}</p>
    </div>
  );
}

export default Student;