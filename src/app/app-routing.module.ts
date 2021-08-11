import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntregaComponent } from './entrega/entrega.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LojistaComponent } from './lojista/lojista.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', 
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'entrega', component: EntregaComponent },
      { path: 'lojista', component: LojistaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
