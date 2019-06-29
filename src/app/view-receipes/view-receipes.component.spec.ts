import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReceipesComponent } from './view-receipes.component';

describe('ViewReceipesComponent', () => {
  let component: ViewReceipesComponent;
  let fixture: ComponentFixture<ViewReceipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReceipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
