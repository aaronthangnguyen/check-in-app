import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { courses as courseData } from "../../data/courses";

interface Course {
  id: number;
  number: string;
  name: string;
}

interface Ticket {
  studentId: string;
  time: string;
  courseNumber: string;
  courseName: string;
}

const Form = () => {
  // Default time
  const now = new Date();
  const hours = `${now.getHours() < 10 ? "0" : ""}${now.getHours()}`;
  const minutes = `${now.getMinutes() < 10 ? "0" : ""}${now.getMinutes()}`;

  // Default ticket
  const initalTicket: Ticket = {
    studentId: "",
    time: `${hours}:${minutes}`,
    courseNumber: "",
    courseName: "",
  };

  const [ticket, setTicket] = useState<Ticket>(initalTicket);
  const [courses, setCourses] = useState<Course[]>([]);
  const formEl = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    // TODO: _

    // Reset ticket
    setTicket(initalTicket);
  };

  useEffect(() => {
    courseData.sort((x, y) => (x.number < y.number ? -1 : 1));
    setCourses(courseData);
  }, []);

  return (
    <form ref={formEl} onSubmit={handleSubmit}>
      <Flex direction="column" alignItems="center">
        {/* Student ID */}
        <FormControl id="student-id" isRequired mb={4}>
          <FormLabel fontSize="lg">Student ID</FormLabel>
          <Input
            type="string"
            size="lg"
            placeholder="V012345678"
            value={ticket.studentId}
            onChange={(e) =>
              setTicket({ ...ticket, studentId: e.target.value })
            }
          />
        </FormControl>

        {/* Time */}
        <FormControl id="time" isRequired mb={4}>
          <FormLabel fontSize="lg">Appointment</FormLabel>
          <Input
            type="time"
            size="lg"
            value={ticket.time}
            onChange={(e) => setTicket({ ...ticket, time: e.target.value })}
          />
        </FormControl>

        {/* Course Number & Name */}
        <FormControl id="course" isRequired mb={8}>
          <FormLabel fontSize="lg">Course</FormLabel>
          <Select
            size="lg"
            placeholder="Select course"
            value={`${ticket.courseNumber} - ${ticket.courseName}`}
            onChange={(e) => {
              const [_courseNumber, _courseName] = e.target.value.split(" - ");
              setTicket({
                ...ticket,
                courseNumber: _courseNumber,
                courseName: _courseName,
              });
            }}
          >
            {courses.map((course) => (
              <option key={course.id}>
                {course.number} - {course.name}
              </option>
            ))}
          </Select>
        </FormControl>

        {/* Submit*/}
        <Button type="submit" size="lg" px="24" colorScheme="teal">
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default Form;
