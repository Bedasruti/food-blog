import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastreceipesComponent } from './breakfastreceipes.component';

describe('BreakfastreceipesComponent', () => {
  let component: BreakfastreceipesComponent;
  let fixture: ComponentFixture<BreakfastreceipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakfastreceipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastreceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
