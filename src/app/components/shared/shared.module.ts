import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// angular meterial
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

// Shared Components
import { ButtonComponent } from './core/button/button.component';
import { ImageComponent } from './core/image/image.component';
import { InputComponent } from './core/input/input.component';
import { TableComponent } from './core/table/table.component';
import { SidebarLeftComponent } from './widgets/sidebars/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './widgets/sidebars/sidebar-right/sidebar-right.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    ImageComponent,
    TableComponent,
    SidebarLeftComponent,
    SidebarRightComponent, 
  ],
  imports: [
    BrowserModule, 
    FlexLayoutModule
  ],
  providers: [],
  exports: [          
    FlexLayoutModule,
    MatSidenavModule, 
    InputComponent,
    ButtonComponent,
    ImageComponent,
    TableComponent,
    SidebarLeftComponent,
    SidebarRightComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
