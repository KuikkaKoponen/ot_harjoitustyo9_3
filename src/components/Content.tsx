import React from 'react';
import { CourseType } from "../types";


const Content: React.FC<{ list: CourseType[] }> = ({ list }) => {
  const listCourses = list.map(course => {   
    return  <li> {course.name}, {course.exerciseCount} </li>
  })
  
  return (
    <div> <p> Content: </p> <ul> {listCourses} </ul> </div>
  )
}

export default Content;
