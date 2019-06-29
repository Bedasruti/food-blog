import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainessreceipesComponent } from './chainessreceipes.component';

describe('ChainessreceipesComponent', () => {
  let component: ChainessreceipesComponent;
  let fixture: ComponentFixture<ChainessreceipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainessreceipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainessreceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
