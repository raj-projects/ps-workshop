import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FooterComponent } from './components/shared/widgets/footer/footer.component';
import { SidebarComponent } from './components/shared/widgets/sidebar/sidebar.component';
import { HeaderComponent } from './components/shared/widgets/header/header.component';
import { InputComponent } from './components/shared/core/input/input.component';
import { ButtonComponent } from './components/shared/core/button/button.component';
import { ImageComponent } from './components/shared/core/image/image.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CourseComponent } from './components/pages/courses/course/course.component';
import { TableComponent } from './components/shared/core/table/table.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule 
  ],
  declarations: [
    AppComponent, 
    HelloComponent, 
    FooterComponent, 
    SidebarComponent, 
    HeaderComponent, 
    InputComponent, 
    ButtonComponent, 
    ImageComponent, 
    AboutComponent, 
    CoursesComponent, 
    ContactComponent, 
    CourseComponent, 
    TableComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
