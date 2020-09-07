import React from 'react';
import { CoursePart } from "../types";


const Content: React.FC<{ list: CoursePart[] }> = ({ list }) => {
  const listCourses =  list.reduce((carry, course) => carry + course.exerciseCount, 0)
  
  return (
    <div> <p> Number of exercises: {listCourses} </p> </div>
  )
}

export default Content;