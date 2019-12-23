import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ------------Angular Material---------------
import {
  MatToolbarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatCardModule,
  MatButtonModule,
  MatProgressBarModule
} from '@angular/material';

const ngMaterialComponents = [
  MatToolbarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatCardModule,
  MatButtonModule,
  MatProgressBarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ngMaterialComponents
  ],
  exports: [ngMaterialComponents]
})
export class NgMaterialModule { }
