import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableFrio } from './observable-frio';

describe('ObservableFrio', () => {
  let component: ObservableFrio;
  let fixture: ComponentFixture<ObservableFrio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableFrio],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservableFrio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
