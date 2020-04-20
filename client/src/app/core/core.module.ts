import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import {BreadcrumbModule} from 'xng-breadcrumb';
import {ToastrModule} from 'ngx-toastr';
import { SectionHeadeComponent } from './section-heade/section-heade.component';



@NgModule({
  declarations: [NavBarComponent, TestErrorComponent, NotFoundComponent, ServerErrorComponent, SectionHeadeComponent],
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  exports: [NavBarComponent, SectionHeadeComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
