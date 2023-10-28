import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class History {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1})
  id: number;

  @ManyToOne(() => User, (user) => user.history)
  @ApiProperty({ example: '2023-10-28 10:00:00', description: 'Время выполнения действия' })
  user: User;

  @Column({ type: 'timestamp' })
  @ApiProperty({ example: 200, description: 'Результат выполнения запроса' })
  actionTime: Date;

  @Column()
  @ApiProperty({ example: 25.5, description: 'Температура в градусах Цельсия', required: false })
  requestResult: number;

  @Column({ type: 'decimal', nullable: true })
  @ApiProperty({ example: '2023-10-28 10:00:00', description: 'Время создания записи' })
  tempC: number;

  @CreateDateColumn()
  @ApiProperty({ example: '2023-10-28 10:00:00', description: 'Время обновления записи' })
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}