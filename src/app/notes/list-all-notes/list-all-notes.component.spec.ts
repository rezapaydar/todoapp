import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllNotesComponent } from './list-all-notes.component';

describe('ListAllNotesComponent', () => {
  let component: ListAllNotesComponent;
  let fixture: ComponentFixture<ListAllNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
