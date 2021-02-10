import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresclientComponent } from './offresclient.component';

describe('OffresclientComponent', () => {
  let component: OffresclientComponent;
  let fixture: ComponentFixture<OffresclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffresclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
