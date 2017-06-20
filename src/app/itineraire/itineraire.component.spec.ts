import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraireComponent } from './itineraire.component';

describe('ItineraireComponent', () => {
  let component: ItineraireComponent;
  let fixture: ComponentFixture<ItineraireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItineraireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
