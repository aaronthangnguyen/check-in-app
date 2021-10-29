interface Ticket {
  studentId: string;
  courseId: string;
  time: Date;
}

export const tickets: Ticket[] = [];

export default Ticket;
