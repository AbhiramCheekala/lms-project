import React, {useState, useEffect, useRef} from "react";
import AddCourse from "./components/AddCourse";
import AddStudent from "./components/AddStudent";
import EnrollStudent from "./components/EnrollStudent";
import StudentCourses from "./components/StudentCourses";

const App = () => {

  const[name,setName] = useState("")
  const prevName = useRef()

  useEffect(()=>{
    prevName.current = name
  },[name])



  return (
    <>
    <div>
      <h1>LMS Example with shareef</h1>
      <AddCourse />
      <AddStudent />
      <EnrollStudent />
      <StudentCourses />
    </div>

    <div>
      <input type ="text" onChange={(e)=> setName(e.target.value)} value={name}/>
    <h1>my name is {name} and my prev name is raji {prevName.current}</h1>
    <div>
      My Changes
    </div>
    </div>


    </>
  );
};

export default App;
