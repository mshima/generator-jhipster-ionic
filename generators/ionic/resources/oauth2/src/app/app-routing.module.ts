import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/welcome/welcome.module.js').then(m => m.WelcomePageModule) },
  { path: 'tabs', loadChildren: () => import('./pages/tabs/tabs.module.js').then(m => m.TabsPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module.js').then(m => m.LoginPageModule) },
  { path: 'callback', loadChildren: () => import('./auth/auth-callback/auth-callback.module.js').then(m => m.AuthCallbackPageModule) },
  { path: 'logout', loadChildren: () => import('./auth/end-session/end-session.module.js').then(m => m.EndSessionPageModule) },
  { path: 'accessdenied', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
