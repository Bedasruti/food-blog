import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegreceipesComponent } from './vegreceipes.component';

describe('VegreceipesComponent', () => {
  let component: VegreceipesComponent;
  let fixture: ComponentFixture<VegreceipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegreceipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegreceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
