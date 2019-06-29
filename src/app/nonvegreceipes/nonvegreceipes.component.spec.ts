import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegreceipesComponent } from './nonvegreceipes.component';

describe('NonvegreceipesComponent', () => {
  let component: NonvegreceipesComponent;
  let fixture: ComponentFixture<NonvegreceipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonvegreceipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonvegreceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
