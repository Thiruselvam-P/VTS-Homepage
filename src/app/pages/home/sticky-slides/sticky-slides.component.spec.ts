import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickySlidesComponent } from './sticky-slides.component';

describe('StickySlidesComponent', () => {
  let component: StickySlidesComponent;
  let fixture: ComponentFixture<StickySlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickySlidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickySlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
