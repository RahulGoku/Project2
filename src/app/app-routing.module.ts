import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'service', component: ServiceComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
