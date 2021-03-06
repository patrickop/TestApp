import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthGuard } from "./shared/guard/auth.guard";
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
{ path: '', redirectTo: '/sign-in', pathMatch: 'full' },
{ path: 'sign-in', component: SignInComponent },
{ path: 'register-user', component: SignUpComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'forgot-password', component: ForgotPasswordComponent },
{ path: 'verify-email-address', component: VerifyEmailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  declarations: [SignInComponent, SignUpComponent, DashboardComponent, ForgotPasswordComponent, VerifyEmailComponent]
})
export class AppRoutingModule { }
