import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { JoblistComponent } from './joblist/joblist.component';
import { AddjobComponent } from './addjob/addjob.component';
import { EditjobComponent } from './editjob/editjob.component';
import { DeletejobComponent } from './deletejob/deletejob.component';
import { DetailsjobComponent } from './detailsjob/detailsjob.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JoblistComponent,
    AddjobComponent,
    EditjobComponent,
    DeletejobComponent,
    DetailsjobComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
