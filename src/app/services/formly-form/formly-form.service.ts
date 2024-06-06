import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FormlyForm } from 'src/app/interfaces/formly-form';

@Injectable({
  providedIn: 'root'
})

export class FormlyFormService {

  constructor(private http: HttpClient) { }

  public _currentFormlyForm: Subject<FormlyForm> = new Subject<FormlyForm>();
  public currentFormlyFormObs = this._currentFormlyForm.asObservable();

  setCurrentFormlyForm(form: FormlyForm){
    this._currentFormlyForm.next(form);
  }

  getCurrentForm() : Observable<FormlyForm>{
    return this.currentFormlyFormObs;
  }


  createFormlyForm(formlyForm: any): Observable<Object> {
    console.log("Formly form sent to endpoint", formlyForm);
    return this.http.post('http://localhost:3000/formly-form', formlyForm);

  }

  getFormlyForms(): Observable<Object> {
    return this.http.get('http://localhost:3000/formly-form');
  }

  getFormlyForm(id: string): Observable<FormlyForm> {
    const params = new HttpParams().set('id', id);
    return this.http.get<FormlyForm>(`http://localhost:3000/formly-form/`, { params });
  }

  getUserFormlyForms(userId: string):Observable<FormlyForm[]>{
    const params = new HttpParams().set('userId', userId);
    return this.http.get<FormlyForm[]>(`http://localhost:3000/formly-form/`, { params });
  }

  getUserFormlyFormsByEmail(userEmail: string):Observable<FormlyForm[]>{
    const params = new HttpParams().set('userEmail', userEmail);
    return this.http.get<FormlyForm[]>(`http://localhost:3000/formly-form/`, { params });
  }

  updateFormlyForm(id: string, formlyForm: FormlyForm): Observable<Object>{
    return this.http.put(`http://localhost:3000/formly-form/${id}`, formlyForm)
  }

  deleteFormlyForm(id: string) {
    return this.http.delete<FormlyForm>(`http://localhost:3000/formly-form/${id}`).subscribe();
  }
}
