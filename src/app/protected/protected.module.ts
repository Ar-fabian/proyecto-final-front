import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { DashboardComponent } from './dashboard/dashboard.component';

import { StockComponent } from './pages/stock/stock.component';

import { CardsComponent } from './components/cards/cards.component';
import { MallsBtnsComponent } from './components/malls-btns/mallsBtns.component';

import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './pages/products/products.component';
import { ListStoresComponent } from './components/list-stores/list-stores.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { TodoFiltersComponent } from './components/todo-filters/todo-filters.component';
import { MapsModule } from '../maps/maps.module';
import { MapsBtnsComponent } from './components/maps-btns/maps-btns.component';
import { MapsRoutesComponent } from './pages/maps-routes/maps-routes.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent,
    StockComponent,
    ProductsComponent,
    MallsBtnsComponent,
    ListStoresComponent,
    SearchBarComponent,
    ListProductsComponent,
    BudgetComponent,
    TodoFiltersComponent,
    MapsBtnsComponent,
    MapsRoutesComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ProtectedRoutingModule,
    MaterialModule,
    FormsModule,
    MapsModule,
  ]
})
export class ProtectedModule { }
