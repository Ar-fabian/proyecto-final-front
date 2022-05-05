import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/products/products.component';
import { StockComponent } from './pages/stock/stock.component';
import { BudgetComponent} from './pages/budget/budget.component'
import { MapsRoutesComponent } from './pages/maps-routes/maps-routes.component';

const routes: Routes = [
  {
    path:'',
    // component: DashboardComponent,
    // component: MapsRoutesComponent,
    children:[
      {path: 'maps', component: MapsRoutesComponent },
      {path: 'stock', component: StockComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'budget', component: BudgetComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
