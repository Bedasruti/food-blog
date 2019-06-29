import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReceipesComponent } from './delete-receipes.component';

describe('DeleteReceipesComponent', () => {
  let component: DeleteReceipesComponent;
  let fixture: ComponentFixture<DeleteReceipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteReceipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
