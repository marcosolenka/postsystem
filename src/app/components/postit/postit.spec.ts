import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Postit } from './postit';

describe('Postit', () => {
  let component: Postit;
  let fixture: ComponentFixture<Postit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Postit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Postit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
