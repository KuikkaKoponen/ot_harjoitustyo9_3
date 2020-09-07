export interface CourseType {
  name: string;
  exerciseCount: number;
}

// new types
interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartBaseSecond{
  description: string;
}

interface CoursePartOne extends CoursePartBase, CoursePartBaseSecond {
  name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartBase, CoursePartBaseSecond {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree;
