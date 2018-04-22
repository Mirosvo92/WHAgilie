import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryShotComponent } from './gallery-shot.component';

describe('GalleryShotComponent', () => {
  let component: GalleryShotComponent;
  let fixture: ComponentFixture<GalleryShotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryShotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
