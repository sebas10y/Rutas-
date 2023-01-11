import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  //rutas protegidas
  {path: 'dashboard', component:PagesComponent,
   children:[
    {path: '', component:DashboardComponent},
    {path: 'category', component:CategoryComponent},
    {path: 'product', component:ProductComponent},
    {path: '', redirectTo:'/dashboard', pathMatch:'full'}
] },
  //{path: '**', component:NotFoundComponent},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class PagesRoutingModule { }
