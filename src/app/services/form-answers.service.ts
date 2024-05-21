import { Injectable } from '@angular/core';
import { Form } from '../interfaces/form';
declare var require: any;
var PouchDB = require('pouchdb').default;

interface PouchDBPutResult {
	ok: boolean;
	id: string;
	rev: string;
}

interface PouchDBGetResult {
	_id: string;
	_rev: string;
}

interface PouchDBRemoveResult {
	ok: boolean;
	id: string;
	rev: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormAnswersService {

  data: any;
  pouchdb: any;
  remote: any;

  constructor() {
    this.pouchdb = new PouchDB("formbuilder-pouchdb");

    this.remote = 'http://localhost:5984/formbuilder-pouchdb';

    let options = {
      live: true,
      retry: true,
      continuous: true,
    };
    // Setting up two way replication between local PouchDB database and the remote CouchDB database
    // For one way: this.db.replicate.to('http://localhost:5984/formbuilder-pouchdb').
    this.pouchdb.sync(this.remote, options);
  }

  getFormAnswers(){    
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.pouchdb.allDocs({
        include_docs: true
      }).then((result:any) => {
        this.data = [];
        let docs = result.rows.map((row:any) => {
          this.data.push(row.doc);
        });
        resolve(this.data);
        this.pouchdb.changes({live: true, since: 'now', include_docs: true}).on('change', (change:any) => {
          this.handleChange(change);
        });
      }).catch((error:any) => {
        console.log(error);
      });
    });
  }

  addFormAnswers(form: Form, formAnswers: any) {
    var promise = this.pouchdb.put({
      _id: "formAnswers:" + new Date().getTime(),
      formId: "66217b17b50e5867f32720e0", 
      formFilename: "New form 1",
      formAnswers: formAnswers
      })
      .then((result: PouchDBPutResult): string => {
        return("Saved form answers: " +  result.id + " Revision: " + result.rev);
        }
      );
    
    return promise;
  }  


  handleChange(change:any) {
    let changedDoc = null;
    let changedIndex = null;
    // Detecting that the document has changed
    this.data.forEach((doc:any, index:any) => {
      if(doc._id === change.id){
        changedDoc = doc;
        changedIndex = index;
      }
    });
    //A document was deleted
    if(change.deleted){
      this.data.splice(changedIndex, 1);
    }
    else {
      //A document was updated
      if(changedDoc && changedIndex){
        this.data[changedIndex] = change.doc;
      }
      //A document was added
      else {
        this.data.push(change.doc);
      }
    }
  }

  updateFormAnswers(_id: any, formAnswers: any) {
    this.pouchdb.get(_id).then( (doc: any) => {
      //doc._deleted = false;
      //formId: "66217b17b50e5867f32720e0", 
      //doc.formFilename = "New form 1",
      doc.formAnswers = formAnswers
      return this.pouchdb.put(doc);
    });
  }

  deleteFormAnswers(_id: any){
    var promise = this.pouchdb.get(_id).then((doc:PouchDBGetResult) => {
      return this.pouchdb.remove(doc._id, doc._rev);
    })
    .then((result: PouchDBRemoveResult): void => {
      return;
    });

    return promise;
  }
}