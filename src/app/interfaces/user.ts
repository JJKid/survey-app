import { CustomField } from "./custom-field";
import { Form } from "./form";

export interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  username?: string;
  forms?: Form[];
  customFields?: CustomField[];
}