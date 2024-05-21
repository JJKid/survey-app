import { FormlyFieldConfig } from "@ngx-formly/core";
import { User } from "./user";

export interface FormlyForm {
    _id?: any;
    filename: string;
    fields?: FormlyFieldConfig[];
    author?: User | string;
    readers?: string[];
}