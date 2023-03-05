import {
  IsDefined,
  IsArray,
  ArrayNotEmpty,
  ArrayMinSize,
  IsInt,
  IsPositive,
  Min,
} from 'class-validator';

export class CreateConversationDto {
  // IsDefined, IsInt, IsPositive, Min(1)
  @IsDefined()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(2)
  @IsInt({ each: true })
  @IsPositive({ each: true })
  @Min(1, { each: true })
  membersId: number[];
}