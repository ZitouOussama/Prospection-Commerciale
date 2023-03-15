import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { ClientComponent } from './Clients/client/client.component';
import { AddClientComponent } from './Clients/add-client/add-client.component';
import { UpdateClientComponent } from './Clients/update-client/update-client.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { NgxPaginationModule} from 'ngx-pagination';
import { AddUserComponent } from './Users/add-user/add-user.component';
import { UpdateUserComponent } from './Users/update-user/update-user.component';
import { UserComponent } from './Users/user/user.component';
import { UserProfilComponent } from './UserProfil/user-profil/user-profil.component';
import { ProjectComponent } from './Projects/project/project.component';
import { AddProjectComponent } from './Projects/add-project/add-project.component';
import { BeforeLoginService } from './servises/before-login.service';
import { AfterLoginService } from './servises/after-login.service';
import { AuthService } from './servises/auth.service';
import { TokenService } from './servises/token.service';
import { JarwisService } from './servises/jarwis.service';
import { Chart2Component } from './chart2/chart2.component';
import { LoginComponent } from './Components/login/login.component';
import { RequestResetComponent } from './Components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './Components/password/response-reset/response-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    ChartComponent,
    ClientComponent,
    AddClientComponent,
    UpdateClientComponent,
    AddUserComponent,
    UpdateUserComponent,
    UserComponent,
    UserProfilComponent,
    ProjectComponent,
    AddProjectComponent,
    Chart2Component,
    LoginComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }