import { IsString, Length, IsInt, IsBoolean, IsOptional } from 'class-validator';

export class CreateBookDto {
    @IsString()
    @Length(3)
    title: string;
  
    @IsString()
    author: string;
  
    @IsInt()
    year: number; // year uchun custom pipe ishlatiladi
  
    @IsOptional()
    @IsBoolean()
    isPublished?: boolean;
}
