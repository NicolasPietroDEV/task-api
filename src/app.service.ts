import { TaskEntity } from './task.entity';
import { Injectable } from '@nestjs/common';
import { Task } from 'src/interfaces/task.interface'
import { Repository, DeleteResult, UpdateResult } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepo: Repository<TaskEntity>) {}

  getHello(): string {
    return 'Hello World!';
  }

  
  createTask(task: Task): Promise<TaskEntity>{
    return this.taskRepo.save(this.taskRepo.create(task))
  }

  async getTaskById(id: string): Promise<Task>{
    const response = await this.taskRepo.findOne({where: {id: id}})
    return response
  }

  getAllTasks(): Promise<TaskEntity[]>{
    return this.taskRepo.find()
  }

  updateTask(id: string, task: Task): Promise<UpdateResult>{
    return this.taskRepo.update({id: id}, task)
  }

  deleteTask(id: string): Observable<DeleteResult>{
    return from(this.taskRepo.delete({id: id}))
  }
  





}
