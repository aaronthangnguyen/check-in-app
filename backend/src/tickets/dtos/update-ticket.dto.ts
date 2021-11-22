import { IsString } from 'class-validator';

export class UpdateTicketDto {
  @IsString()
  readonly studentId?: string;

  @IsString()
  readonly course?: string;
}
