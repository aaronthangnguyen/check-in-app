import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import Ticket, { tickets } from "../../entities/ticket";
import { CourseSelect, StudentIdInput } from "./Fields";

interface Values {
  studentId: string;
  courseId: string;
}

const TicketForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values: Values) => {
    const ticket: Ticket = {
      studentId: values.studentId,
      courseId: values.courseId,
      time: new Date(),
    };
    tickets.push(ticket);
    console.log(tickets);
    reset();
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      gridGap={2}
      onSubmit={handleSubmit(onSubmit)}
      as="form"
    >
      <StudentIdInput errors={errors} register={register} />
      <CourseSelect errors={errors} register={register} />
      <Button
        size="lg"
        px={24}
        colorScheme="teal"
        isLoading={isSubmitting}
        mt={4}
        type="submit"
      >
        Check-in
      </Button>
    </Flex>
  );
};

export default TicketForm;
