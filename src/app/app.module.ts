import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
