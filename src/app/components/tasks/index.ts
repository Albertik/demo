import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared';
import { TaskFormComponent } from './components/task-form';
import { TaskItemComponent } from './components/task-item';
import { TaskListComponent } from './components/task-list';
import { TasksComponent } from './components/tasks';
import { AutoFocusDirective } from './directives/autofocus-directive';
import { TaskListFilterPipe } from './pipes/task-list-filter-pipe';
import { Task } from './task';
import { TaskActions } from './task.actions';
import { TaskEffects } from './task.effects';
import { taskReducer } from './task.reducer';
import { TaskService } from './task.service';
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  {path: 'tasks', component: TasksComponent}
];

@NgModule({
  declarations: [
    AutoFocusDirective,
    TaskFormComponent,
    TaskItemComponent,
    TaskListComponent,
    TaskListFilterPipe,
    TasksComponent
  ],
  imports: [
    EffectsModule.runAfterBootstrap(TaskEffects),
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    TaskActions,
    TaskService
  ]
})

export class TasksModule {}

export { Task, TaskService, taskReducer };
