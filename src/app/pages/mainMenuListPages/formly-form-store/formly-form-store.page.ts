import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonNavLink, IonIcon } from '@ionic/angular/standalone';
import { FormlyFormService } from '../../../services/formly-form/formly-form.service';
import { User } from '../../../interfaces/user';
import { FormlyForm } from '../../../interfaces/formly-form';
import { MainMenuListPage } from '../../main-menu-list/main-menu-list.page';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-formly-form-store',
  templateUrl: './formly-form-store.page.html',
  styleUrls: ['./formly-form-store.page.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive ,IonIcon, IonNavLink, IonLabel, IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FormlyFormStorePage implements OnInit {


  constructor(public formlyFormService: FormlyFormService) {
   }

  public fetchedFormlyForms : any[]=  [];

  public currentUser: User = {
    name: "Juan",
    email: "jj@mail.com",
    _id: "664d936b3d7c0004d700fdc3"
  };

  rootPage = MainMenuListPage;

  ngOnInit() {
    //this.fetchCurrentUserFormlyForms('664d936b3d7c0004d700fdc3');
    this.fetchCurrentUserFormlyFormsByEmail('romel@mail.com');
    //this.fetchFormlyForm('664d98c7fe4d7858b7280671');
  }

  fetchCurrentUserFormlyForms(userId: string){
    this.formlyFormService.getUserFormlyForms(userId).subscribe((res: any) => {
      console.log("Fetched Formly forms from user", res);
      res.userForms.forEach((formlyForm: any) =>{
        this.fetchedFormlyForms.push(formlyForm);
      });
    })
  }

  fetchCurrentUserFormlyFormsByEmail(userEmail: string){
    this.formlyFormService.getUserFormlyFormsByEmail(userEmail).subscribe((res: any) => {
      console.log("Fetched Formly forms from user by email", res);
      res.userForms.forEach((formlyForm: any) =>{
        this.fetchedFormlyForms.push(formlyForm);
      });
    })
  }

  fetchFormlyForm(id: string){
    this.formlyFormService.getFormlyForm(id).subscribe((res: any) => {
      console.log("Res for formly form by id", res);
    })
  }

  setSelectedFormlyForm(fetchedForm: FormlyForm){
    this.formlyFormService.setCurrentFormlyForm(fetchedForm);
  }

  openDeleteModal(arg0: any) {
    throw new Error('Method not implemented.');
  }

}
