import { IsString } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  readonly studentId: string;

  @IsString()
  readonly course: string;
}
