import { AfterLoginService } from './services/afterlogin.service';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { BeforeLoginService } from './services/before-login.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AfterLoginService]

  },
  {
    path: 'forgetpassword',
    component: ForgetPasswordComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'resetpassword/:id',
    component: ResetPasswordComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(mod => mod.DashboardModule),
    canActivate: [BeforeLoginService]
  },
  {
    path: '',
    loadChildren: () => import('./components/website/website.module').then(mod => mod.WebsiteModule),
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
