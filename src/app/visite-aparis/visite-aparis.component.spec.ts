import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteAparisComponent } from './visite-aparis.component';

describe('VisiteAparisComponent', () => {
  let component: VisiteAparisComponent;
  let fixture: ComponentFixture<VisiteAparisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisiteAparisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteAparisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
