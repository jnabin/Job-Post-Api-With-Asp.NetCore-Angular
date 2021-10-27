import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsjobComponent } from './detailsjob/detailsjob.component';
import { DeletejobComponent } from './deletejob/deletejob.component';
import { EditjobComponent } from './editjob/editjob.component';
import { AddjobComponent } from './addjob/addjob.component';
import { JoblistComponent } from './joblist/joblist.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', component:JoblistComponent},
  {path:'addjob', component:AddjobComponent},
  {path:'editJob/:id', component:EditjobComponent},
  {path:'deleteJob/:id', component:DeletejobComponent},
  {path:'detailsJob/:id', component:DetailsjobComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
