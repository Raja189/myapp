import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Inventory} from "../model/inventory.model";
import { Observable} from 'rxjs';

@Injectable()
export class InventoryService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:44315/api/Inventory';

  getInventorys() {
    /* let fakeInventorys = [{id: 1, Name: 'Inventory1', Price: '100', Quantity: 10},
     {id: 1, Name: 'Inventory2', Price: '120', Quantity: 12},
     {id: 1, Name: 'Inventory3', Price: '140', Quantity: 10},
     {id: 1, Name: 'Inventory4', Price: '160', Quantity: 8},
   ];
   return Observable.of(fakeInventorys).delay(5000);*/
    return this.http.get<Inventory[]>(this.baseUrl + '/GetInventory');
  }

  getInventoryById(id: number) {
    return this.http.get<Inventory>(this.baseUrl + '/GetInventoryId?id=' +  id);
  }

  createInventory(inventory: Inventory) : Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(inventory);
    console.log(body)
    return this.http.post(this.baseUrl + '/AddInventory/', body,{'headers':headers})
  }
  
  updateInventory(inventory: Inventory) : Observable<any> {
    const updateheaders = { 'content-type': 'application/json'}  
    const editbody=JSON.stringify(inventory);
    //const url = this.baseUrl + '/EditInventory/' + inventory.inventoryId ;
    return this.http.put(this.baseUrl + '/EditInventory/', editbody,{'headers':updateheaders})
  }

  //updateInventory(inventory: Inventory)  {
    //return this.http.put(this.baseUrl + '/EditInventory/' + inventory.inventoryId, inventory);
  //}

  deleteInventory(id: number) {
    return this.http.delete(this.baseUrl + '/DeleteInventory?id=' + id);
  }
}
