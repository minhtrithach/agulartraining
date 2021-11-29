import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Todo } from 'src/app/model/todo.model';
import { TodoItemUpdateComponent } from './todo-item-update/todo-item-update.component';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todos!: Todo[];
  @Output() deleteTodoItem=new EventEmitter<number>();
  names: string[] = [];
  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }
  handleDelete(index:number) {
    this.deleteTodoItem.emit(index);
  
  }
  open() {
    this.dialogService.open(TodoItemUpdateComponent)
      .onClose.subscribe(name => name && this.names.push(name));
  }
  
  
}