import create from "zustand";

// Define the store
const useStore = create((set) => ({
  courses: [],
  students: [],
  enrollments: [],
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, course],
    })),
  addStudent: (student) =>
    set((state) => ({
      students: [...state.students, student],
    })),
  enrollStudent: (studentId, courseId) =>
    set((state) => ({
      enrollments: [...state.enrollments, { studentId, courseId }],
    })),
  getStudentCourses: (studentId) => {
    return (state) => {
      if (!state.courses || !state.enrollments) {
        return [];
      }
      const enrolledCourses = state.enrollments
        .filter((enrollment) => enrollment.studentId === studentId)
        .map((enrollment) =>
          state.courses.find((course) => course.id === enrollment.courseId)
        )
        .filter((course) => course !== undefined); // Filter out any undefined courses
      return enrolledCourses;
    };
  },
}));

export default useStore;
