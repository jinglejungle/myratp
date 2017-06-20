import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneHorairesComponent } from './ligne-horaires.component';

describe('LigneHorairesComponent', () => {
  let component: LigneHorairesComponent;
  let fixture: ComponentFixture<LigneHorairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneHorairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneHorairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
