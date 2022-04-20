import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './pages/form/form.component';
import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/products/products.component';
import { StockComponent } from './pages/stock/stock.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children:[
      {path: 'main', component: MainComponent},
      {path: 'stock', component: StockComponent},
      {path: 'form/add', component: FormComponent},
      {path: 'form/edit/:id', component: FormComponent},
      {path: 'products', component: ProductsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
