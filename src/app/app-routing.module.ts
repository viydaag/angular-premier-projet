import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './services/auth-guard.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';


const routes: Routes = [
	{ path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
	{ path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
	{ path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
	{ path: 'auth', component: AuthComponent },
	{ path: 'users', component: UserListComponent },
	{ path: 'new-user', component: NewUserComponent },
	{ path: '', component: AppareilViewComponent },
	{ path: 'not-found', component: Erreur404Component },
	{ path: '**', redirectTo: 'not-found' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
