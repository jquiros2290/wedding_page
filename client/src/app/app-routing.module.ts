import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main/main.component';
import { RegistryComponent } from './registry/registry.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { GuestbookLoginComponent } from './guestbook/guestbook-login/guestbook-login.component';
import { GuestbookRegisterComponent } from './guestbook/guestbook-register/guestbook-register.component';
import { GuestbookIndexComponent } from './guestbook/guestbook-index/guestbook-index.component';
import { ComingComponent } from './coming/coming.component';

const routes: Routes = [
	
	{ path: '', component: MainComponent },
	{ path: 'info', component: InfoComponent },
	{ path: 'photos', component: ComingComponent },
	{ path: 'registry', component: RegistryComponent },
	{ path: 'guestbook', component: GuestbookComponent, children: [
		{ path: 'login', component: GuestbookLoginComponent},
		{ path: 'register', component: GuestbookRegisterComponent},
		{ path: 'show', component: GuestbookIndexComponent}
	] },

	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
