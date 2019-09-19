import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import {SanJoseComponent } from './san-jose/san-jose.component';



const routes: Routes = [
  { path: 'seattle',component: SeattleComponent },
  { path: 'san-jose', component: SanJoseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
