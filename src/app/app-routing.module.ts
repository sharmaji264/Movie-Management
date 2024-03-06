import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TimingsComponent } from './timings/timings.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: MovieDetailsComponent },
  { path: 'timings/:id', component: TimingsComponent },
  { path: 'confirmation/:id/:time/:seats', component: ConfirmationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit/:id', component: EditCustomerComponent },
  // { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
