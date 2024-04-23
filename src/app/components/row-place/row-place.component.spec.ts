import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowPlaceComponent } from './row-place.component';

describe('RowPlaceComponent', () => {
  let component: RowPlaceComponent;
  let fixture: ComponentFixture<RowPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RowPlaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
