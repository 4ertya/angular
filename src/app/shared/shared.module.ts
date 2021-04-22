import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {FlexLayoutModule} from '@angular/flex-layout';
import { EqualValidatorDirective } from './directives/equal-validator.directive';



@NgModule({
    declarations: [
        HeaderComponent,
        EqualValidatorDirective
    ],
  exports: [
    HeaderComponent,
    EqualValidatorDirective
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
