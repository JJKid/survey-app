import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonNavLink, IonItem, IonCol, IonIcon, IonLabel, IonListHeader,IonMenuToggle } from '@ionic/angular/standalone';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { FormlyFormStorePage } from 'src/app/pages/mainMenuListPages/formly-form-store/formly-form-store.page';

@Component({
  selector: 'app-main-menu-list',
  templateUrl: './main-menu-list.page.html',
  styleUrls: ['./main-menu-list.page.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IonListHeader, IonLabel, IonIcon, IonCol, IonItem, IonNavLink, IonList, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuToggle, CommonModule, FormsModule,]
})
export class MainMenuListPage implements OnInit {

  public appPages = [
    { title: 'Available Formly forms', url: '/app/formly-viewer', icon: 'pencil' },
    { title: 'Log Out', url: '/app/logout', icon: 'exit' },
  ];

  public currentUser: User = {
    name: "Juan",
    email: "jj@mail.com"
  };

  formlyFormStorePage = FormlyFormStorePage;

  constructor() { }

  ngOnInit() {
  }

}
