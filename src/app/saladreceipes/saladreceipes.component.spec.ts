import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladreceipesComponent } from './saladreceipes.component';

describe('SaladreceipesComponent', () => {
  let component: SaladreceipesComponent;
  let fixture: ComponentFixture<SaladreceipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaladreceipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladreceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
