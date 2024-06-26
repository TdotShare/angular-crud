import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './core/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './core/services/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
