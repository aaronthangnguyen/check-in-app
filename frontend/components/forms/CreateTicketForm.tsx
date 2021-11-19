import { CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import axios, { Method } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { KeyedMutator } from "swr";
import { CreateTicket, Ticket } from "../../types/ticket";

interface CreateTicketFormProps {
  onMutate: KeyedMutator<Ticket[]>;
}

export const CreateTicketForm = ({ onMutate }: CreateTicketFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm();
  const options = getOptions();

  const onSubmit: SubmitHandler<CreateTicket> = async (ticket) => {
    reset();
    setFocus("studentId");
    await axios
      .request({
        method: "POST" as Method,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/tickets`,
        headers: { "Content-Type": "application/json" },
        data: ticket,
      })
      .then((res) => {})
      .catch((err) => {
        console.error(err);
      });
    onMutate();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Student ID */}
      <FormControl isInvalid={errors.studentId}>
        <FormLabel id="student-id-label" htmlFor="student-id" fontSize="lg">
          Student ID
        </FormLabel>
        <Input
          id="student-id"
          placeholder="Student ID"
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

      {/* Course */}
      <FormControl isInvalid={errors.course}>
        <FormLabel id="course-label" htmlFor="course" fontSize="lg">
          Course
        </FormLabel>
        <Select
          id="course"
          placeholder="Select course"
          size="lg"
          isRequired
          {...register("course", {
            required: "Course is required",
          })}
        >
          {options?.map((data) => {
            return (
              <option key={data} value={data}>
                {data}
              </option>
            );
          })}
        </Select>
        <FormErrorMessage>
          {errors.course && errors.course.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        leftIcon={<CheckIcon />}
        colorScheme="teal"
        isLoading={isSubmitting}
        type="submit"
        mt={4}
      >
        Submit
      </Button>
    </form>
  );
};

function getOptions() {
  const options = [
    "COP 1000C - Introduction to Programming Concepts",
    "COP 2800C - Java Programming I",
    "HUM 1020 - Introduction to Humanities",
    "MAC 1105 - College Algebra",
    "MAC 1140 - Precalculus Algebra",
  ];

  return options;
}
