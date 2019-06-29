import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthindianreceipesComponent } from './southindianreceipes.component';

describe('SouthindianreceipesComponent', () => {
  let component: SouthindianreceipesComponent;
  let fixture: ComponentFixture<SouthindianreceipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthindianreceipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthindianreceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
