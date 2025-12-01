import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRegister } from './change-register';

describe('ChangeRegister', () => {
  let component: ChangeRegister;
  let fixture: ComponentFixture<ChangeRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
