import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainMenuListPage } from './main-menu-list.page';

describe('MainMenuListPage', () => {
  let component: MainMenuListPage;
  let fixture: ComponentFixture<MainMenuListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
