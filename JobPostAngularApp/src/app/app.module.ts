import { ErrorHandler } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { AppErrorHandler } from './common/app-error-handler';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JoblistComponent,
    AddjobComponent,
    EditjobComponent,
    DeletejobComponent,
    DetailsjobComponent,
    NotfoundComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:ErrorHandler, useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
