import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
} from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { courses } from "../../entities/course";

interface Props {
  errors: { [x: string]: any };
  register: UseFormRegister<FieldValues>;
}

export const StudentIdInput = ({ errors, register }: Props) => {
  return (
    <FormControl id="student-id-control" isInvalid={errors.studentId}>
      <FormLabel htmlFor="student-id" fontSize="lg">
        Student ID
      </FormLabel>
      <Input
        id="student-id"
        placeholder="V0123456789"
        type="string"
        size="lg"
        {...register("studentId", {
          required: "Student ID is required",
          minLength: { value: 9, message: "Minimum length is 9" },
          maxLength: { value: 14, message: "Maximum length is 14" },
        })}
      />
      <FormErrorMessage>
        {errors.studentId && errors.studentId.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export const CourseSelect = ({ errors, register }: Props) => {
  return (
    <FormControl id="course" isInvalid={errors.courseId}>
      <FormLabel htmlFor="course" fontSize="lg">
        Course
      </FormLabel>
      <Select
        size="lg"
        placeholder="Select course"
        {...register("courseId", {
          required: "Course is required",
        })}
      >
        {courses.map((course) => (
          <option value={course.id} key={course.id}>
            {course.identifier} - {course.title}
          </option>
        ))}
      </Select>
      <FormErrorMessage>
        {errors.courseId && errors.courseId.message}
      </FormErrorMessage>
    </FormControl>
  );
};
