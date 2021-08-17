import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PostsComponent } from './components/pages/posts/posts.component';
import { PostComponent } from './components/pages/posts/post/post.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PageNotFound } from './components/pages/page-404/page-404.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: PageNotFound},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
