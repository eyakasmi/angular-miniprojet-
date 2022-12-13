import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUnivComponent } from './list-univ.component';

describe('ListUnivComponent', () => {
  let component: ListUnivComponent;
  let fixture: ComponentFixture<ListUnivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUnivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
