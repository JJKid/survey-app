import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormlyForm } from 'src/app/interfaces/formly-form';

@Injectable({
  providedIn: 'root'
})

export class FormlyFormService {

  constructor(private http: HttpClient) { }

  createFormlyForm(formlyForm: any): Observable<Object> {
    console.log("Formly form sent to endpoint", formlyForm);
    return this.http.post('http://localhost:3000/formly-form', formlyForm);

  }

  getFormlyForms(): Observable<Object> {
    return this.http.get('http://localhost:3000/formly-form');
  }

  getFormlyForm(id: string): Observable<FormlyForm> {
    let params = new HttpParams().set('id', id);
    return this.http.get<FormlyForm>(`http://localhost:3000/formly-form/`, { params: params });
  }

  getUserFormlyForms(userId: string):Observable<FormlyForm[]>{
    return this.http.get<FormlyForm[]>(`http://localhost:3000/formly-form/${userId}`);
  }

  updateFormlyForm(id: string, formlyForm: FormlyForm): Observable<Object>{
    return this.http.put(`http://localhost:3000/formly-form/${id}`, formlyForm)
  }

  deleteFormlyForm(id: string) {
    return this.http.delete<FormlyForm>(`http://localhost:3000/formly-form/${id}`).subscribe();
  }
}
