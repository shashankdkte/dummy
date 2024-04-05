import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { ExternalScheduleComponent } from './external-schedule/external-schedule.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DetailsComponent,
    NavigationLinkComponent,
    StudentManagementComponent,
    ExternalScheduleComponent,
    DashboardComponent,
    NotFoundComponent,
    NavigationMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
