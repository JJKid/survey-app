import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormlyFormStorePage } from './formly-form-store.page';

describe('FormlyFormStorePage', () => {
  let component: FormlyFormStorePage;
  let fixture: ComponentFixture<FormlyFormStorePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyFormStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
