import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'contact', component: ContactComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'about', component: AboutComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register',component:RegisterComponent},
  { path: 'service', component: ServiceComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
