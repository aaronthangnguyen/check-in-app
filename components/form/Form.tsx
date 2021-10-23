import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Course, { courses as courseList } from "../../models/course";
import Ticket, { getInitialTicket } from "../../models/ticket";

const Form = () => {
  const initialTicket = getInitialTicket();

  const [ticket, setTicket] = useState<Ticket>(initialTicket);
  const [courses, setCourses] = useState<Course[]>([]);

  const studentIdInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    // TODO: Add to local database
    console.log(ticket);

    // Reset ticket
    setTicket(initialTicket);

    // Set focus to Student ID
    studentIdInputRef.current?.focus();
  };

  useEffect(() => {
    courseList.sort((x, y) => (x.number < y.number ? -1 : 1));
    setCourses(courseList);
  }, []);

  return (
    <Flex direction="column" alignItems="center">
      {/* Student ID */}
      <FormControl id="student-id" isRequired mb={4}>
        <FormLabel fontSize="lg">Student ID</FormLabel>
        <Input
          type="string"
          size="lg"
          placeholder="V012345678"
          value={ticket.studentId}
          ref={studentIdInputRef}
          onChange={(e) => setTicket({ ...ticket, studentId: e.target.value })}
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
      <Button size="lg" px="24" colorScheme="teal" onClick={handleSubmit}>
        Submit
      </Button>
    </Flex>
  );
};

export default Form;
