import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './page/user-create/user-create.component';
import { UserListComponent } from './page/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'userList',
    pathMatch: 'full'
  },
  { path: 'userCreate', component: UserCreateComponent },
  { path: 'userList', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
