import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// angular meterial
import { MatSidenavModule } from '@angular/material/sidenav';

import { ButtonComponent } from './core/button/button.component';
import { ImageComponent } from './core/image/image.component';
import { InputComponent } from './core/input/input.component';
import { TableComponent } from './core/table/table.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    ImageComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule
  ],
  providers: [],
  exports: [      
    InputComponent,
    ButtonComponent,
    ImageComponent,
    TableComponent
  ]
})
export class SharedModule { }
