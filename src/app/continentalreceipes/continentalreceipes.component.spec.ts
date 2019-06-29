import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentalreceipesComponent } from './continentalreceipes.component';

describe('ContinentalreceipesComponent', () => {
  let component: ContinentalreceipesComponent;
  let fixture: ComponentFixture<ContinentalreceipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentalreceipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentalreceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
