import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-feature',
  templateUrl: './todo-feature.component.html',
  styleUrls: ['./todo-feature.component.scss']
})
export class TodoFeatureComponent implements OnInit {
  todos!: Todo[];
  inputTodo: Todo = new Todo();
  updateTodo: Todo=new Todo();
  currentDate: Date = new Date();
  ngOnInit(): void {
    this.todos = [];

  }
  addTodo() {
    this.todos.push({
      content: this.inputTodo.content,
      completed: false,
      startDate: this.currentDate,
      relatePerson: this.inputTodo.relatePerson,
      estimateDate: this.inputTodo.estimateDate
    });
  }
  handleDelete(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  updateContent(id: number) {
    this.todos[id] = {
      content: this.updateTodo.content,
      completed: this.todos[id].completed,
      startDate: this.currentDate,
      relatePerson: this.updateTodo.relatePerson,
      estimateDate: this.updateTodo.estimateDate
    }
    console.log(this.todos[id]);
    return this.todos[id];
  }
}
