import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheMedcinComponent } from './recherche-medcin.component';

describe('RechercheMedcinComponent', () => {
  let component: RechercheMedcinComponent;
  let fixture: ComponentFixture<RechercheMedcinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheMedcinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheMedcinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
