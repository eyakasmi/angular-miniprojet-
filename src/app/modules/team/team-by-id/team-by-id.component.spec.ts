import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamByIdComponent } from './team-by-id.component';

describe('TeamByIdComponent', () => {
  let component: TeamByIdComponent;
  let fixture: ComponentFixture<TeamByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
