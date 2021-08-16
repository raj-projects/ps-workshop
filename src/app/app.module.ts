import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// angular meterial
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// shared module
import { SharedModule } from './components/shared/shared.module';
import {FlexLayoutModule, BREAKPOINT} from '@angular/flex-layout';

// Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/widgets/header/header.component';
import { FooterComponent } from './components/shared/widgets/footer/footer.component';
import { SidebarComponent } from './components/shared/widgets/sidebar/sidebar.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CourseComponent } from './components/pages/courses/course/course.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { HomeComponent } from './components/pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    CourseComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FlexLayoutModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
