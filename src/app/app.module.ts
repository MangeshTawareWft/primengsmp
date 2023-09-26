import { APP_INITIALIZER, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from "primeng/toast";
import { MessageService } from 'primeng/api';

import { CardModule } from 'primeng/card';
import { HomeComponent } from './home/home.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [

    MessageService,

  ],
  bootstrap: [AppComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    CardModule,
    TableModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

// Need to added app service and call 
