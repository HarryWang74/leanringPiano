import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week04bComponent } from './week04b.component';

describe('Week04bComponent', () => {
  let component: Week04bComponent;
  let fixture: ComponentFixture<Week04bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week04bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week04bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
