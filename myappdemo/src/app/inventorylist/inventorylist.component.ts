import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {InventoryService} from "../service/inventory.service";
import {Inventory} from "../model/inventory.model";
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrls: ['./inventorylist.component.css']
})
export class InventorylistComponent implements OnInit {

  inventorys: Inventory[];

  constructor(private router: Router, private inventoryService: InventoryService,private datepipe: DatePipe) { }

  ngOnInit() {
    
    this.inventoryService.getInventorys()
      .subscribe( data => {
        this.inventorys = data;
      }
      );
  }

  deleteInventory(inventory: Inventory): void {
    this.inventoryService.deleteInventory(inventory.inventoryId)
      .subscribe( data => {
        this.inventorys = this.inventorys.filter(u => u !== inventory);
      })
  };

  editInventory(inventory: Inventory): void {
    localStorage.removeItem("editInventoryId");
    localStorage.setItem("editInventoryId", inventory.inventoryId.toString());
    this.router.navigate(['editinventory']);
  };

  addInventory(): void {
    this.router.navigate(['addinventory']);
    
  };
}
