interface Course {
  readonly id: string;
  identifier: string;
  title: string;
}

export const courses: Course[] = [
  {
    id: "2d6b3dea-2eca-4844-9c9c-80ed040c9d0e",
    identifier: "COP 1000C",
    title: "Intro to Programming Concepts",
  },
  {
    id: "a26259d3-f66c-43f8-9f05-71c1dadde83d",
    identifier: "COP 2800C",
    title: "Java Programming I",
  },
  {
    id: "dad737e5-9d1d-4393-a189-b0237da9afb5",
    identifier: "HUM 1020",
    title: "Intro to Humanities",
  },
  {
    id: "0b3014ca-a4b2-46db-ae01-ff6e7bdff765",
    identifier: "MAC 1140",
    title: "Precalculus Algebra",
  },
];

export default Course;
