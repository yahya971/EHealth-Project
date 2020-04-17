import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorForgottonPwComponent } from './doctor-forgotton-pw.component';

describe('DoctorForgottonPwComponent', () => {
  let component: DoctorForgottonPwComponent;
  let fixture: ComponentFixture<DoctorForgottonPwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorForgottonPwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorForgottonPwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
