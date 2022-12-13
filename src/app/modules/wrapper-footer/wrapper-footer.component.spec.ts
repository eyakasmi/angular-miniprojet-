import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperFooterComponent } from './wrapper-footer.component';

describe('WrapperFooterComponent', () => {
  let component: WrapperFooterComponent;
  let fixture: ComponentFixture<WrapperFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
