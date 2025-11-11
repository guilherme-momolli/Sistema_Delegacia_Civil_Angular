import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAlert } from './base-alert';

describe('BaseAlert', () => {
  let component: BaseAlert;
  let fixture: ComponentFixture<BaseAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseAlert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
