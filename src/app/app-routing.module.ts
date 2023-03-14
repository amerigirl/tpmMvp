import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherPortalComponent } from './teacher-portal/teacher-portal.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'landingComponent', component: LandingComponent },
  { path: 'teacherPortalComponent', component: TeacherPortalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
