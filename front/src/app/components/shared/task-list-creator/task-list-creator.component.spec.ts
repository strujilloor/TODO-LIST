import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListCreatorComponent } from './task-list-creator.component';

describe('TaskListCreatorComponent', () => {
  let component: TaskListCreatorComponent;
  let fixture: ComponentFixture<TaskListCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
