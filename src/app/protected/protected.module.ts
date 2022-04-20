import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { DashboardComponent } from './dashboard/dashboard.component';

import { MainComponent } from './pages/main/main.component';
import { StockComponent } from './pages/stock/stock.component';
import { FormComponent } from './pages/form/form.component';

import { CardsComponent } from './components/cards/cards.component';
import { SearchComponent } from './components/search/search.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './pages/products/products.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent,
    MainComponent,
    StockComponent,
    SearchComponent,
    ProductListComponent,
    FormComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ProtectedRoutingModule,
    MaterialModule,
    FormsModule

  ]
})
export class ProtectedModule { }
