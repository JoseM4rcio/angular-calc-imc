import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcIMCComponent } from './calc-imc.component';

describe('CalcIMCComponent', () => {
  let component: CalcIMCComponent;
  let fixture: ComponentFixture<CalcIMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcIMCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
