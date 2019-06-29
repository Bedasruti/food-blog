import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupreceipesComponent } from './soupreceipes.component';

describe('SoupreceipesComponent', () => {
  let component: SoupreceipesComponent;
  let fixture: ComponentFixture<SoupreceipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoupreceipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoupreceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
