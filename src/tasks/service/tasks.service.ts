import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskDTO } from '../dto/task.dto';
import { Task } from '../entities/task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) {}

  async findAll() {
    const all = await this.taskRepo.find();
    return all;
  }

  async oneTask(id: number) {
    const task = await this.taskRepo.findOne(id);
    return task;
  }

  async createTask(taskDto: TaskDTO) {
    const taskNew = await this.taskRepo.create(taskDto);
    return this.taskRepo.save(taskNew);
  }

  async deleteTask(id: number) {
    await this.taskRepo.delete(id);
    return true;
  }

  async updateTask(id: number, taskDto: TaskDTO) {
    const task = await this.taskRepo.findOne(id);
    this.taskRepo.merge(task, taskDto);
    return this.taskRepo.save(task);
  }
}
