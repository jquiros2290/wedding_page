import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { GuestbookService } from './guestbook/guestbook.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { RegistryComponent } from './registry/registry.component';
import { MainComponent } from './main/main.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { GuestbookIndexComponent } from './guestbook/guestbook-index/guestbook-index.component';
import { GuestbookLoginComponent } from './guestbook/guestbook-login/guestbook-login.component';
import { GuestbookRegisterComponent } from './guestbook/guestbook-register/guestbook-register.component';
import { ComingComponent } from './coming/coming.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    RegistryComponent,
    MainComponent,
    GuestbookComponent,
    GuestbookIndexComponent,
    GuestbookLoginComponent,
    GuestbookRegisterComponent,
    ComingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [GuestbookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
