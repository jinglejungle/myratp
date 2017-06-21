import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItiComponent } from './form-iti.component';

describe('FormItiComponent', () => {
  let component: FormItiComponent;
  let fixture: ComponentFixture<FormItiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormItiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormItiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
