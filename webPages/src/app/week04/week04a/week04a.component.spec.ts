import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week04aComponent } from './week04a.component';

describe('Week04aComponent', () => {
  let component: Week04aComponent;
  let fixture: ComponentFixture<Week04aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week04aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week04aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
