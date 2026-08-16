import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableCaliente } from './observable-caliente';

describe('ObservableCaliente', () => {
  let component: ObservableCaliente;
  let fixture: ComponentFixture<ObservableCaliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableCaliente],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservableCaliente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
