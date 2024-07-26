import React, { useState } from "react";
import useStore from "../store";

const EnrollStudent = () => {
  const [studentId, setStudentId] = useState("");
  const [courseId, setCourseId] = useState("");
  const students = useStore((state) => state.students);
  const courses = useStore((state) => state.courses);
  const enrollStudent = useStore((state) => state.enrollStudent);

  const handleSubmit = () => {
    enrollStudent(Number(studentId), Number(courseId));
    setStudentId("");
    setCourseId("");
  };

  return (
    <div>
      <h2>Enroll Student</h2>
      <select value={studentId} onChange={(e) => setStudentId(e.target.value)}>
        <option value="">Select Student</option>
        {students.map((student) => (
          <option key={student.id} value={student.id}>
            {student.name}
          </option>
        ))}
      </select>
      <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
        <option value="">Select Course</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Enroll</button>
    </div>
  );
};

export default EnrollStudent;
