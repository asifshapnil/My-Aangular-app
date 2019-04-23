import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts',
    children: [
      {path: '', component: PostsComponent},
      {path: 'post-details', component: PostdetailsComponent},
      {path: ':id', component: PostdetailsComponent}


    ]
  }
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


