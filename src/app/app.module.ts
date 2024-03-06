import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
// import { FilterPipe } from './filter.pipe';
import { FilterPipe } from './filter.pipe';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TimingsComponent } from './timings/timings.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AlertComponent } from './alert/alert.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    MovieDetailsComponent,
    TimingsComponent,
    ConfirmationComponent,
    DashboardComponent,
    EditCustomerComponent,
    AlertComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
