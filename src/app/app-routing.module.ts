import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { AboutMeComponent } from './components/about-me/about-me.component';


const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
