import React, { useState } from "react";
import useStore from "../store";

const AddCourse = () => {
  const [name, setName] = useState("");
  const addCourse = useStore((state) => state.addCourse);

  const handleSubmit = () => {
    addCourse({ id: Date.now(), name });
    setName("");
  };

  return (
    <div>
      <h2>Add Course</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Course Name"
      />
      <button>durga</button>
      <button>jdkjd</button>
      <button onClick={handleSubmit}>Add Course</button>
    </div>
  );
};

export default AddCourse;
