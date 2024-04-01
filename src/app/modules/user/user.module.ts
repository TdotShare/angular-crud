import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './page/user-list/user-list.component';
import { UserCreateComponent } from './page/user-create/user-create.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService
  ],
})
export class UserModule { }

