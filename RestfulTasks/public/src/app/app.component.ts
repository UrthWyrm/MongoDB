import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Implement OnInit.
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){}
  // ngOnInit will run when the component is initialized, after the constructor method.
  title = "Restful Tasks API"
  tasks = [];
  task = "";
  nothing = false;

  ngOnInit() {
    
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => 
      {console.log("Got our tasks!", data)
    this.tasks = data["task"]
  });
}
info(idx) {
  this.task = this.tasks[idx];
  this.nothing = true;
}
}
