export interface Ticket {
  id: string;
  studentId: string;
  course: string;
  createDate: string;
}

export interface CreateTicket {
  studentId: string;
  course: string;
}
