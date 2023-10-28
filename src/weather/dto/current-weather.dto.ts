
import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CurrentWeatherDto {
  @ApiProperty({ example: 'Tyumen', description: 'City name' })
  @IsString()
  city: string;

  @ApiProperty({ example: 'ru', description: 'Language (optional)', required: false })
  @IsString()
  @IsOptional()
  language?: string;
}