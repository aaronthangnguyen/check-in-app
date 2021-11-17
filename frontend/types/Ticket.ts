export interface Ticket {
  id: string;
  studentId: string;
  course: string;
  createdAt: string;
}

export interface CreateTicket {
  studentId: string;
  course: string;
}
