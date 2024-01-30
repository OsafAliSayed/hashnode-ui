import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
    {'path': 'signin', 'title': 'Sign In', component:SigninComponent},
    {'path': 'blog', 'title': 'Blog', component:BlogComponent} ,
    {'path': 'dashboard', 'title': 'Dashboard', component:DashboardComponent}    
];
