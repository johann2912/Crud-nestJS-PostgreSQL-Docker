import {
  Controller,
  Get,
  Delete,
  Post,
  Param,
  Put,
  Body,
} from '@nestjs/common';
import { TasksService } from '../service/tasks.service';
import { TaskDTO } from '../dto/task.dto';

@Controller('api/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/')
  getAll() {
    return this.tasksService.findAll;
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.tasksService.oneTask(id);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: number) {
    return this.tasksService.deleteTask(id);
  }

  @Post('/create')
  createTask(@Body() taskDto: TaskDTO) {
    return this.tasksService.createTask(taskDto);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.tasksService.updateTask(id, body);
  }
}
