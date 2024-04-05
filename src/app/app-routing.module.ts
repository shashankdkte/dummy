import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { ExternalScheduleComponent } from './external-schedule/external-schedule.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
 
 { path: 'dashboard', component: DashboardComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'student-management', component: StudentManagementComponent },
  { path: 'external-schedule', component: ExternalScheduleComponent },
  { path:'not-found', component:NotFoundComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to /home for the root URL
  { path: '**', redirectTo: '/not-found' } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
