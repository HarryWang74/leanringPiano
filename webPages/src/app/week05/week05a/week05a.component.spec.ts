import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week05aComponent } from './week05a.component';

describe('Week05aComponent', () => {
  let component: Week05aComponent;
  let fixture: ComponentFixture<Week05aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week05aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week05aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
