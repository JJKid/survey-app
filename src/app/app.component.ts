import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonNav } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, pencilSharp, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, exitOutline, exitSharp, eye, eyeSharp } from 'ionicons/icons';
import { FormAnswersService } from './services/form-answers/form-answers.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { User } from './interfaces/user';
import { FormlyFormStorePage } from './pages/mainMenuListPages/formly-form-store/formly-form-store.page';
import { MainMenuListPage } from './pages/main-menu-list/main-menu-list.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonNav],
})
export class AppComponent {
  sidebarRootPage = MainMenuListPage;

  public formAnswers: any;
  public currentUser: User = {
    name: "Juan",
    email: "jj@mail.com",
    _id: "664d936b3d7c0004d700fdc3"
  };
  formlyFormStorePage = FormlyFormStorePage;


  constructor() {
    addIcons({ mailOutline, pencilSharp,  mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline,
       archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, exitSharp, eye, eyeSharp });
  }

  ngOnInit() {
    this.login();

  }

  // TODO: Refactor and add login mechanism to set a logged in user
  login() {
    sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

}

