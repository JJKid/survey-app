import { User } from "./user";

export interface CustomField {
    _id?: any;
    name: null | string;
    filename: string | null;
    addedFields: Array<any>;
    author: User | string;    
}