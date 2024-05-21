import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/fill-survey',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'formly-form-store',
    loadComponent: () => import('./formly-form-store/formly-form-store.page').then( m => m.FormlyFormStorePage)
  },
];

