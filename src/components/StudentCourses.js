import React, { useState, useEffect } from "react";
import useStore from "../store";

const StudentCourses = () => {
  const [studentId, setStudentId] = useState("");
  const students = useStore((state) => state.students);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const getStudentCourses = useStore((state) => state.getStudentCourses);

  useEffect(() => {
    if (studentId) {
      const courses = getStudentCourses(studentId);
      setEnrolledCourses(courses || []);
    } else {
      setEnrolledCourses([]);
    }
  }, [studentId, getStudentCourses]);

  return (
    <div>
      <h2>Student Courses</h2>
      <select value={studentId} onChange={(e) => setStudentId(e.target.value)}>
        <option value="">Select Student</option>
        {students.map((student) => (
          <option key={student.id} value={student.id}>
            {student.name}
          </option>
        ))}
      </select>
      {studentId && (
        <ul>
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course) => (
              <li key={course.id}>{course.name}</li>
            ))
          ) : (
            <li>No courses found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default StudentCourses;
