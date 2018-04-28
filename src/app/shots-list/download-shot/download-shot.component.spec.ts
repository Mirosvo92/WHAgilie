import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadShotComponent } from './download-shot.component';

describe('DownloadShotComponent', () => {
  let component: DownloadShotComponent;
  let fixture: ComponentFixture<DownloadShotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadShotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
