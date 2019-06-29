import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewReceipesComponent } from './view-receipes/view-receipes.component';
import { UpdateReciepesComponent } from './update-reciepes/update-reciepes.component';
import { DeleteReceipesComponent } from './delete-receipes/delete-receipes.component';
import { VegreceipesComponent } from './vegreceipes/vegreceipes.component';
import { NonvegreceipesComponent } from './nonvegreceipes/nonvegreceipes.component';
import { DessertreceipesComponent } from './dessertreceipes/dessertreceipes.component';
import { BreakfastreceipesComponent } from './breakfastreceipes/breakfastreceipes.component';
import { SaladreceipesComponent } from './saladreceipes/saladreceipes.component';
import { SouthindianreceipesComponent } from './southindianreceipes/southindianreceipes.component';
import { SweetreceipesComponent } from './sweetreceipes/sweetreceipes.component';
import { ItalianreceipesComponent } from './italianreceipes/italianreceipes.component';
import { ChainessreceipesComponent } from './chainessreceipes/chainessreceipes.component';
import { ContinentalreceipesComponent } from './continentalreceipes/continentalreceipes.component';
import { SoupreceipesComponent } from './soupreceipes/soupreceipes.component';
import { LoginComponent } from './login/login.component';
import { AddreceipeComponent } from './addreceipe/addreceipe.component';
const routes: Routes = [
  {path: 'homepage', component:HomepageComponent},
  {path: 'viewreceipes', component:ViewReceipesComponent},
  {path: 'addreceipes', component:AddreceipeComponent},
  {path: 'updaterecepies', component:UpdateReciepesComponent},
  {path: 'deleterecepies', component:DeleteReceipesComponent},
  {path: 'vegreceipes', component:VegreceipesComponent},
  {path: 'nonvegreceipes', component:NonvegreceipesComponent},
  {path: 'dessertreceipes', component:DessertreceipesComponent },
  {path: 'breakfastreceipes', component:BreakfastreceipesComponent},
  {path: 'saladreceipes', component:SaladreceipesComponent},
  {path: 'southindianreceipes', component:SouthindianreceipesComponent},
  {path: 'sweetreceipes', component:SweetreceipesComponent },
  {path: 'italianreceipes', component:ItalianreceipesComponent},
  {path: 'chainessreceipes', component:ChainessreceipesComponent},
  {path: 'continentalreceipes', component:ContinentalreceipesComponent},
  {path: 'soupreceipes', component:SoupreceipesComponent},
  {path: 'login', component:LoginComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent,ViewReceipesComponent,AddreceipeComponent,UpdateReciepesComponent,DeleteReceipesComponent,VegreceipesComponent,NonvegreceipesComponent,DessertreceipesComponent,BreakfastreceipesComponent,SaladreceipesComponent,SouthindianreceipesComponent,SweetreceipesComponent,SweetreceipesComponent,ItalianreceipesComponent,ChainessreceipesComponent,ContinentalreceipesComponent,SoupreceipesComponent,LoginComponent]