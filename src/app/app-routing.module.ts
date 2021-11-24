import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Clients Components
import { HomeComponent } from './components/pages/client-ui/home/home.component';
import { AboutComponent } from './components/pages/client-ui/about/about.component';
import { CourcesComponent } from './components/pages/client-ui/cources/cources.component';
import { CourceComponent } from './components/pages/client-ui/cources/cource/cource.component';
import { PostsComponent } from './components/pages/client-ui/posts/posts.component';
import { PostComponent } from './components/pages/client-ui/posts/post/post.component';
import { ContactComponent } from './components/pages/client-ui/contact/contact.component';
import { PageNotFound } from './components/pages/client-ui/page-404/page-404.component';

// Admin Components
import { DashboardComponent } from './components/pages/admin-ui/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cources', component: CourcesComponent},
  {path: 'cource/:id', component: CourceComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: PageNotFound},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
