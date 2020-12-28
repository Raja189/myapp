import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AuthenticationService} from "./service/auth.service";
import { InventorylistComponent } from './inventorylist/inventorylist.component';
import { AddinventoryComponent } from './addinventory/addinventory.component';
import { EditinventoryComponent } from './editinventory/editinventory.component';
import { InventoryService } from './service/inventory.service';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InventorylistComponent,
    AddinventoryComponent,
    EditinventoryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
        
  ],
  providers: [AuthenticationService,InventoryService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
