import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStudentComponent } from './team-student.component';

describe('TeamStudentComponent', () => {
  let component: TeamStudentComponent;
  let fixture: ComponentFixture<TeamStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
