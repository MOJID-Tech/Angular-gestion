import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsprestationsComponent } from './detailsprestations.component';

describe('DetailsprestationsComponent', () => {
  let component: DetailsprestationsComponent;
  let fixture: ComponentFixture<DetailsprestationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsprestationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsprestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
