export interface Ticket {
  id: string;
  studentId: string;
  course: string;
  createAt: string;
}

export interface CreateTicket {
  studentId: string;
  course: string;
}
