import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from '../app.service';
import { Task } from '../interfaces/task.interface';
import { Observable } from 'rxjs';
import { DeleteResult } from 'typeorm';

@Controller('tasks')
export class TasksController {
    constructor(private readonly appService: AppService){}
    @Get(':id') 
    async getTaskById(@Param('id') id: string): Promise<Task>{
        return this.appService.getTaskById(id)
    }

    @Get() 
    async getAllTasks(): Promise<Task[]>{
        return this.appService.getAllTasks()
    }

    @Post() 
    async createTask(@Body() task: Task): Promise<Task>{
        return this.appService.createTask(task)
    }

    @Put(':id')
    async updateTask(@Body() task:Task, @Param('id') id: string){
        return this.appService.updateTask(id, task)
    }

    @Delete(':id') 
    deleteTask(@Param('id') id: string): Observable<DeleteResult>{
        return this.appService.deleteTask(id);
    }
}
