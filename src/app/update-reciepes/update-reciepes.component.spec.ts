import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReciepesComponent } from './update-reciepes.component';

describe('UpdateReciepesComponent', () => {
  let component: UpdateReciepesComponent;
  let fixture: ComponentFixture<UpdateReciepesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReciepesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReciepesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
