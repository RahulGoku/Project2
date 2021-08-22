import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'contact', component: ContactComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'service', component: ServiceComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
