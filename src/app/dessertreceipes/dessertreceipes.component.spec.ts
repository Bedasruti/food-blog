import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertreceipesComponent } from './dessertreceipes.component';

describe('DessertreceipesComponent', () => {
  let component: DessertreceipesComponent;
  let fixture: ComponentFixture<DessertreceipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DessertreceipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertreceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
