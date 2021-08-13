import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduLibComponent } from './edu-lib.component';

describe('EduLibComponent', () => {
  let component: EduLibComponent;
  let fixture: ComponentFixture<EduLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
