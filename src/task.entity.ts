import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: "tasks"})
export class TaskEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({name: "title",type: 'varchar', nullable: false})
  title: string

  @Column({name: "description",type: 'varchar', nullable: false})
  desc: string

  @Column({name: "date",type: 'varchar', nullable: false})
  date: string

  @Column({name: "status",type: 'boolean', nullable: false})
  status: boolean
}