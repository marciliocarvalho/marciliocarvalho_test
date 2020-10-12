import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeComponent } from './pages/me/me.component';
import { UserAddComponent } from './pages/user-add/user-add.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UserListComponent } from './pages/user-list/user-list.component';


const routes: Routes = [
{
  path: '',
  component: UserListComponent
},
{
  path: 'user-add',
  component: UserAddComponent
},
{
  path: 'user-edit/:id',
  component: UserEditComponent
},
{
  path: 'me',
  component: MeComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
