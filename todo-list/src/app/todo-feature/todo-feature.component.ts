import { Component, OnInit} from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-feature',
  templateUrl: './todo-feature.component.html',
  styleUrls: ['./todo-feature.component.scss']
})
export class TodoFeatureComponent implements OnInit {
  todos!: Todo[];
  inputTodo: Todo = new Todo();
  updateTodo: Todo = new Todo();
  currentDate: Date = new Date();
  updateIndex!: number;
  ngOnInit(): void {
    this.todos = [];

  }

  constructor() { }
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
  handleUpdateIndex(index: number) {
    console.log(index)
    return this.updateIndex = index;

  }
  handleUpdateTodoItem(todo: Todo) {
    console.log(todo);
    this.todos[this.updateIndex] = {
      content: todo.content,
      completed: todo.completed,
      startDate: todo.startDate,
      relatePerson: todo.relatePerson,
      estimateDate: todo.estimateDate
    }
  }
  handleToggleDone(index: number) {
    this.todos.map((v, i) => {
      if (i == index) v.completed = !v.completed;

      return v;
    })
  }
}
