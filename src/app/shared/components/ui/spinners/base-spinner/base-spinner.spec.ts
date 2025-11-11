import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSpinner } from './base-spinner';

describe('BaseSpinner', () => {
  let component: BaseSpinner;
  let fixture: ComponentFixture<BaseSpinner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseSpinner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseSpinner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
