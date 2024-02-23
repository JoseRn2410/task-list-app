import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskToDoComponent } from './list-task-to-do.component';

describe('ListTaskToDoComponent', () => {
  let component: ListTaskToDoComponent;
  let fixture: ComponentFixture<ListTaskToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTaskToDoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTaskToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
