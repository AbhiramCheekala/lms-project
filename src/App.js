import React from "react";
import AddCourse from "./components/AddCourse";
import AddStudent from "./components/AddStudent";
import EnrollStudent from "./components/EnrollStudent";
import StudentCourses from "./components/StudentCourses";

const App = () => {
  return (
    <div>
      <h1>LMS Example with shareef</h1>
      <AddCourse />
      <AddStudent />
      <EnrollStudent />
      <StudentCourses />
    </div>
  );
};

export default App;
