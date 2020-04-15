import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TO DO LIST';
  todos = [
  
   { 
    label: 'Fare la spesa',
    done: false,  
    priority: 2
    },

    { 
    label: 'Pagare mutuo',
    done: true, 
    priority: 5
    },

    { 
    label: 'Scandenza assicurazione',
    done: true, 
    priority: 3 
    },
/*
    { 
    label: 'Mangiare cane',
    done: false, 
    priority: 5
    }*/
 ];

 options  = ['1','2','3','4','5'];

  addTodo(newTodoLabel, priority) {
    var newTodo = {
      label: newTodoLabel,
      done: false,
      priority: priority
    };
    this.todos.push(newTodo);
  }



}



