import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShotsComponent } from './view-shots.component';

describe('ViewShotsComponent', () => {
  let component: ViewShotsComponent;
  let fixture: ComponentFixture<ViewShotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
