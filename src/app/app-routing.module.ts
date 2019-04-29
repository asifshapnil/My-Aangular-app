import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  // { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts',
    children: [
      {path: '', component: PostsComponent},
      {path: 'post-details', component: PostdetailsComponent},
      {path: ':id', component: PostdetailsComponent}
    ]
  },
  { path: 'users',
    children: [
      {path: '', component: UsersComponent},
      {path: 'create', component: UserFormComponent},
      {path: 'create-reactive', component: ReactiveFormComponent}

    ]
  }
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


