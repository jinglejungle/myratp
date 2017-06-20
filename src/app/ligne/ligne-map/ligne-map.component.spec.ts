import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneMapComponent } from './ligne-map.component';

describe('LigneMapComponent', () => {
  let component: LigneMapComponent;
  let fixture: ComponentFixture<LigneMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
