interface Ticket {
  studentId: string;
  time: string;
  courseNumber: string;
  courseName: string;
}

export const getInitialTicket = (): Ticket => {
  // Default time
  const now = new Date();
  const hours = `${now.getHours() < 10 ? "0" : ""}${now.getHours()}`;
  const minutes = `${now.getMinutes() < 10 ? "0" : ""}${now.getMinutes()}`;

  // TODO: Add **date** in addition to time

  // Default ticket
  const initialTicket: Ticket = {
    studentId: "",
    time: `${hours}:${minutes}`,
    courseNumber: "",
    courseName: "",
  };

  return initialTicket;
};

export default Ticket;
