import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianreceipesComponent } from './italianreceipes.component';

describe('ItalianreceipesComponent', () => {
  let component: ItalianreceipesComponent;
  let fixture: ComponentFixture<ItalianreceipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItalianreceipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalianreceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
