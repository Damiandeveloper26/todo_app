import { Component } from '@angular/core';
import { Storage } from './storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  storage_local = new Storage('Tasks', '');
  done_storage_local = new Storage('Done', '');
  now_date = new Date();
  task: string;
  task_list: Array<string> = [];
  task_listdone: Array<string> = [];

  constructor() {
    this.task_list = this.storage_local.localvariable;
    this.task_listdone = this.done_storage_local.localdonevariables;
  }

  add() {
    if (this.task !== '') {
      this.task_list.push(this.task);
      this.storage_local.set('Tasks', JSON.parse(JSON.stringify(this.task_list)));
      this.task = '';
    }
    else {
      alert("Zadanie nie moze byc puste")
    }
  }

  complete(task) {
    this.task_listdone.push(task);
    this.task_list = this.task_list.filter(e => e !== task);
    this.storage_local.set('Tasks', JSON.parse(JSON.stringify(this.task_list)));
    this.done_storage_local.set('TasksDone', JSON.parse(JSON.stringify(this.task_listdone)));
  }

  delete(task) {
    this.task_list = this.task_list.filter(e => e != task)
    this.storage_local.set('Tasks', JSON.parse(JSON.stringify(this.task_list)));
  }

  deleteall() {
    this.task_listdone = [];
    this.done_storage_local.set('TaskDone', JSON.parse(JSON.stringify(this.task_listdone)));
  }
}
