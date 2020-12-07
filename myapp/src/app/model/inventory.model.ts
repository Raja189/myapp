import { DatePipe } from '@angular/common';

export class Inventory{
    inventoryId : number;
    name: string;
    price: number;
    quantity: number;
    createdDate? : Date;
}
