import { Component } from "@angular/core";

@Component({
      selector: 'Page-404',
      template: `
      <div class="main-container" fxLayout="row" fxLayoutAlign="space-between stretch">
            <div class="page-layout" fxFlex="72">
                  404 Page Not Found
            </div>    
            <!-- <app-sidebar-right fxFlex="28"></app-sidebar-right> -->
      </div>
      `,
      styles: ['']
})

export class PageNotFound {

}