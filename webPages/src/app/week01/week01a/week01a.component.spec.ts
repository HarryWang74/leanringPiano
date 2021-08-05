import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week01aComponent } from './week01a.component';

describe('Week01aComponent', () => {
  let component: Week01aComponent;
  let fixture: ComponentFixture<Week01aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week01aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week01aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
