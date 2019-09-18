import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    
  }
  
  getTasks() {
    // our http response is an Observable, store it in a variable
      // Remove the lines of code where we make the variable 'tempObservable' and subscribe to it.
    // tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    // Return the observable to wherever the getTasks method was invoked.
    return this._http.get('/tasks');

  }

  getTasksById(id:string) {
    // let tempObservable = this._http.get('/tasks/:id');
    // tempObservable.subscribe(data => console.log("Got our task, using the ID!", data));
    return this._http.get("/tasks/:id");
  }

  // addTask(newtask) {
  //   return this._http.post('/tasks', newtask);
  // }

  // editTask(editTask) {
  //   return this._http.put(`/tasks/${editTask._id}`, editTask);
  // }

  // deleteTask(task) {
  //   return this._http.delete(`/tasks/${task._id}`, task);
  // }
}