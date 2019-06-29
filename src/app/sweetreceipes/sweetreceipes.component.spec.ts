import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetreceipesComponent } from './sweetreceipes.component';

describe('SweetreceipesComponent', () => {
  let component: SweetreceipesComponent;
  let fixture: ComponentFixture<SweetreceipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetreceipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetreceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
