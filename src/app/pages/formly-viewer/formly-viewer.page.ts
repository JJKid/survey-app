import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { Form } from '@angular/forms';
import { FormAnswersService } from 'src/app/services/form-answers/form-answers.service';
import { FormlyFormService } from 'src/app/services/formly-form/formly-form.service';
import { CommonModule } from '@angular/common';
import { FormlyForm } from 'src/app/interfaces/formly-form';

@Component({
  selector: 'app-formly-viewer',
  templateUrl: './formly-viewer.page.html',
  styleUrls: ['./formly-viewer.page.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    FormlyIonicModule,
    IonicModule,
    CommonModule]
})
export class FormlyViewerPage implements OnInit {

  public currentForm!: Form ;
  public formlyViewer!: string;
  public fetchedFormlyForms: any;
  public isFormlyFormSelected: boolean = false;
  private activatedRoute = inject(ActivatedRoute);

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [];
  currentFormlyForm : any;
  currentUserEmail: string = "jj@mail.com";

  constructor(
    public formAnswersService: FormAnswersService,
    public formlyFormService: FormlyFormService
  ) {}

  ngOnInit() {
    this.formlyViewer = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.formlyFormService.getCurrentForm().subscribe((currentFormlyForm: FormlyForm) => {
      if (currentFormlyForm != null){
        this.currentFormlyForm = currentFormlyForm;
        this.isFormlyFormSelected = true;
        console.log("Current formly form", currentFormlyForm)
        this.fields = [...currentFormlyForm.fields]
      }
    });
  }

  onSubmit(model: any) {
    if (this.form.valid) {
      alert(JSON.stringify(this.model))
      this.saveFormAnswers();
    }
  }

  /**
   * Save the form answers into the PouchDB
   */
  saveFormAnswers() {
    // this.formAnswersService.updateFormAnswers("formAnswers:1713476048307", this.model);
    if (this.currentFormlyForm != null){
      console.log("Saving answers...");
      this.formAnswersService.addFormAnswers(this.currentFormlyForm, this.model, this.currentUserEmail);
    }
  }
}


