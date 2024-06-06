import { User } from "./user";

export interface Form {
    filename: string;
    addedFields: Array<any>;
    isImported?: boolean;
    author?: User | string;
    _id?: any;
    title?: string;
    description?: string;
    // TODO: Set to Field array in the future
    readers?: User[];
    questionCodes?: string[];
}