import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesprestataireComponent } from './servicesprestataire.component';

describe('ServicesprestataireComponent', () => {
  let component: ServicesprestataireComponent;
  let fixture: ComponentFixture<ServicesprestataireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesprestataireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesprestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
