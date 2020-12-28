import { Component, OnInit } from '@angular/core';
import {InventoryService} from "../service/inventory.service";
import {Router} from "@angular/router";
import {Inventory} from "../model/inventory.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-editinventory',
  templateUrl: './editinventory.component.html',
  styleUrls: ['./editinventory.component.css']
})
export class EditinventoryComponent implements OnInit {

  inventory: Inventory;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private inventoryService: InventoryService,private datepipe: DatePipe) { }

  ngOnInit() {
    let inventoryId = localStorage.getItem("editInventoryId");
    if(!inventoryId) {
      alert("Invalid action.")
      this.router.navigate(['inventorylist']);
      return;
    }
   
    this.editForm = this.formBuilder.group({
      inventoryId: [],
      name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      createdDate : this.datepipe.transform(Date.now(),"yyyy-MM-dd")
      
    });
    this.inventoryService.getInventoryById(+inventoryId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.inventoryService.updateInventory(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['inventorylist']);
        },
        error => {
          alert(error);
        });
  }

}
