import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGuidelinesComponent } from './sub-guidelines.component';

describe('SubGuidelinesComponent', () => {
  let component: SubGuidelinesComponent;
  let fixture: ComponentFixture<SubGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
