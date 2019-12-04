import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './filter/filter.component';
import { ResultsComponent } from './results/results.component';
import { ModalComponent } from './modal/modal.component';
import {
  MatSliderModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ResultsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
