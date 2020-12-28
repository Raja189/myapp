import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InventoryService} from "../service/inventory.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { Observable} from 'rxjs';
import {DatePipe} from '@angular/common'

@Component({
  selector: 'app-addinventory',
  templateUrl: './addinventory.component.html',
  styleUrls: ['./addinventory.component.css']
})
export class AddinventoryComponent implements OnInit {

 
  constructor(private formBuilder: FormBuilder,private router: Router, private inventoryService: InventoryService ,private datepipe: DatePipe) 
  {
   
   }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      createdDate : this.datepipe.transform(Date.now(),"yyyy-MM-dd")
    });

  }

  onSubmit() {
    this.inventoryService.createInventory(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['inventorylist']);
      }  );
  }

}
