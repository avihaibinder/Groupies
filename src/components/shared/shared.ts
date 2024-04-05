export class GroupElement {
    id:string;
    title:string;
    items:GroupElement[] | null;
    
    constructor(id:string,title:string,items:GroupElement[] | null) {
     this.id = id;
     this.title = title;
     this.items = items;
    } 
 }