import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddClientComponent } from './Clients/add-client/add-client.component';
import { ClientComponent } from './Clients/client/client.component';
import { UpdateClientComponent } from './Clients/update-client/update-client.component';
import { AddUserComponent } from './Users/add-user/add-user.component';
import { UserComponent } from './Users/user/user.component';
import { UpdateUserComponent } from './Users/update-user/update-user.component';
import { UserProfilComponent } from './UserProfil/user-profil/user-profil.component';
import { AddProjectComponent } from './Projects/add-project/add-project.component';
import { ProjectComponent } from './Projects/project/project.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ajouterClient', component: AddClientComponent },
  { path: 'detailsClient', component: ClientComponent },
  { path: 'modifierClient/:id', component: UpdateClientComponent },
  { path: 'ajouterUtilisateur', component: AddUserComponent },
  { path: 'detailsUser', component: UserComponent },
  { path: 'modifierUser/:id', component: UpdateUserComponent },
  { path: 'Profile', component: UserProfilComponent },
  { path: 'ajouterProjet', component: AddProjectComponent },
  { path: 'detailsProjet', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
