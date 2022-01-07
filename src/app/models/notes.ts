import { events } from "./events";

export interface notes{
    nikName?:string,
    description?:string,
    isImportant?:boolean,
    events?:Array<events>
}