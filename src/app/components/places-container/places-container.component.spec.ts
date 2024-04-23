import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesContainerComponent } from './places-container.component';

describe('PlacesContainerComponent', () => {
  let component: PlacesContainerComponent;
  let fixture: ComponentFixture<PlacesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlacesContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
