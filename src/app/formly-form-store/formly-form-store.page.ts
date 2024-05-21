import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-formly-form-store',
  templateUrl: './formly-form-store.page.html',
  styleUrls: ['./formly-form-store.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FormlyFormStorePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
