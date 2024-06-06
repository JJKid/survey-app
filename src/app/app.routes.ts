import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  {
    path: 'app/:id',
    loadComponent: () => import('./pages/formly-viewer/formly-viewer.page').then( m => m.FormlyViewerPage)
  },
  {
    path: 'formly-form-store',
    loadComponent: () => import('./pages/mainMenuListPages/formly-form-store/formly-form-store.page').then( m => m.FormlyFormStorePage)
  },
  {
    path: 'main-menu-list',
    loadComponent: () => import('./pages/main-menu-list/main-menu-list.page').then( m => m.MainMenuListPage)
  }
];

