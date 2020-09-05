import React from 'react';
import { CourseType } from "../types";


const Content: React.FC<{ list: CourseType[] }> = ({ list }) => {
  const listCourses = list.map(course => {   
    return <li> {course.name} </li>
  })
  
  return (
    <div> <ul>{listCourses} </ul></div>
  )
}

export default Content;
