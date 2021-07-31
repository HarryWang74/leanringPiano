import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week02aComponent } from './week02a.component';

describe('Week02aComponent', () => {
  let component: Week02aComponent;
  let fixture: ComponentFixture<Week02aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week02aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week02aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
