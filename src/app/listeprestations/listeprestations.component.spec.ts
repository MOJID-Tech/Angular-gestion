import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeprestationsComponent } from './listeprestations.component';

describe('ListeprestationsComponent', () => {
  let component: ListeprestationsComponent;
  let fixture: ComponentFixture<ListeprestationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeprestationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeprestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
