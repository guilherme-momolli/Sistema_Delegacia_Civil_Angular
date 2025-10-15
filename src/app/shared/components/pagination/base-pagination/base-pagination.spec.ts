import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePagination } from './base-pagination';

describe('BasePagination', () => {
  let component: BasePagination;
  let fixture: ComponentFixture<BasePagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasePagination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasePagination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
