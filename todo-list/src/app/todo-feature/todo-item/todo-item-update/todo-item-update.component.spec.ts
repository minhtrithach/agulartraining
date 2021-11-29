import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemUpdateComponent } from './todo-item-update.component';

describe('TodoItemUpdateComponent', () => {
  let component: TodoItemUpdateComponent;
  let fixture: ComponentFixture<TodoItemUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
