import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Implement OnInit.
export class AppComponent implements OnInit {
  title = "Restful Tasks API"
  tasks = [];
  task = "";
  // nothing = false;
  // newTask: any;
  // editTask: any;
  // editTog: boolean = false;
  selectedTask;


  constructor(private _httpService: HttpService,
    ) {

  }

  ngOnInit() {
    // this.getTasksFromService()
    // this.newTask = { title: "", description: "" }

  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data["task"]
    });
  }

  // onSubmit() {
  //   let observable = this._httpService.addTask(this.newTask);
  //   observable.subscribe(data => {
  //     console.log("~Create~");
  //     this.newTask = { title: "", description: "" }
  //     this.getTasksFromService();
  //   })
  // }

  // editForm(task) {
  //   this.editTask = { _id: task._id, title: task.title, description: task.description, completed: task.completed}
  //   this.editTog = true;
  // }

  // onEdit() {
  //   let observable = this._httpService.editTask(this.editTask);
  //   observable.subscribe(data => {
  //     console.log("~Edit~");
  //     this.editTog = false;
  //     this.getTasksFromService();
  //   })
  // }
  
  // onDelete(task) {
  //   let observable = this._httpService.deleteTask(task);
  //   observable.subscribe(data => {
  //     console.log("~Delete~");
  //     this.getTasksFromService();
  //   })
  // }
  info(task) {
    this.selectedTask = task;
  }
}
