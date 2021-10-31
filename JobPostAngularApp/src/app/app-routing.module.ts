import { LoginComponent } from './login/login.component';
import { DetailsjobComponent } from './detailsjob/detailsjob.component';
import { EditjobComponent } from './editjob/editjob.component';
import { JoblistComponent } from './joblist/joblist.component';
import { AuthguardGuard } from './authguard.guard';
import { RegistrationComponent } from './registration/registration.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { DeletejobComponent } from './deletejob/deletejob.component';

import { AddjobComponent } from './addjob/addjob.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:JoblistComponent},
  {path:'home', component:JoblistComponent},
  {path:'addjob', component:AddjobComponent, canActivate:[AuthguardGuard]},
  {path:'editJob/:id', component:EditjobComponent, canActivate:[AuthguardGuard]},
  {path:'deleteJob/:id', component:DeletejobComponent, canActivate:[AuthguardGuard]},
  {path:'detailsJob/:id', component:DetailsjobComponent},
  {path:'login', component:LoginComponent},
  {path:'sign-up', component:RegistrationComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
