import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormlyViewerPage } from './formly-viewer.page';

describe('FormlyViewerPage', () => {
  let component: FormlyViewerPage;
  let fixture: ComponentFixture<FormlyViewerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyViewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
