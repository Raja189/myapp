import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {InventorylistComponent } from './inventorylist/inventorylist.component';
import{AddinventoryComponent} from './addinventory/addinventory.component';
import{EditinventoryComponent} from './editinventory/editinventory.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inventorylist', component: InventorylistComponent },
  { path: 'addinventory', component: AddinventoryComponent },
  { path: 'editinventory', component: EditinventoryComponent },
  {path : '', component : LoginComponent}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
