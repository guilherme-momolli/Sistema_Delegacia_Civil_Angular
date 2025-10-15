import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSearchbar } from './base-searchbar';

describe('BaseSearchbar', () => {
  let component: BaseSearchbar;
  let fixture: ComponentFixture<BaseSearchbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseSearchbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseSearchbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
