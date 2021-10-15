import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsCrudComponent } from './payments-crud.component';

describe('PaymentsCrudComponent', () => {
  let component: PaymentsCrudComponent;
  let fixture: ComponentFixture<PaymentsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
