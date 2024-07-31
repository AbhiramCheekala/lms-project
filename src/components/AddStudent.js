import React, { useState } from "react";
import useStore from "../store";

const AddStudent = () => {
  const [name, setName] = useState("");
  const addStudent = useStore((state) => state.addStudent);

  const handleSubmit = () => {
    addStudent({ id: Date.now(), name });
    setName("");
  };

  return (
    <div>
      <h2>Add Student</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student Name"
      />
      <button onClick={handleSubmit}>Add Anusha</button>
    </div>
  );
};

export default AddStudent;
