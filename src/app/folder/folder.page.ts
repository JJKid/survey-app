import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { Form } from '../interfaces/form';
import { FormAnswersService } from '../services/form-answers.service';
import { FormlyFormService } from '../formly-form/formly-form.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    FormlyIonicModule,
    IonicModule,
    ],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public fetchedFormlyForms: any;
  private activatedRoute = inject(ActivatedRoute);
  constructor(
    public formAnswersService: FormAnswersService, 
    public formlyFormService: FormlyFormService
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.formlyFormService.getUserFormlyForms('6571d17ed9a04101fb192a5c').subscribe((res:any) => {
      console.log("Fetched user formly forms", res);
      this.fetchedFormlyForms = res;
      //this.fields.push(this.fetchedFormlyForms.userForms[0].fields[0]);
      this.fields.push({
        key: 'Q003',
        type: 'input',
        props: {
          label: 'Input label',
          required: true,
        }
      });
      console.log("Current fields", this.fields);
    });        
  }

  form = new FormGroup({});
  model = {};



  
  fields: FormlyFieldConfig[] = [
    {
      key: 'Q001',
      type: 'input',
      props: {
        label: 'Input label',
        required: true,
      }
    },
    {
      key: 'Q002',
      type: 'input',
      props: {
        label: 'Input label',
        required: true,
      }
    }
  ];

  public currentForm!: Form ;

  onSubmit(model: any) {
    if (this.form.valid) {
      alert(JSON.stringify(this.model))
      this.formAnswersService.updateFormAnswers("formAnswers:1713476048307", this.model);
    }
  }  
}
