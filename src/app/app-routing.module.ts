import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PescuitComponent } from './permise/pescuit/pescuit.component';
import { AmbarcatiuneComponent } from './permise/ambarcatiune/ambarcatiune.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  { path: '', component: PescuitComponent},

  { path: 'pescuit', component: PescuitComponent },
  { path: 'acces', component: PescuitComponent },
  { path: 'ambarcatiune', component: AmbarcatiuneComponent },

  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
