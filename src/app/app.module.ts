import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { mockBackendInterceptor } from './mock_backend/mock_backend';
import {AppService} from './app.service';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
	BrowserModule,
	HttpClientModule,
	MatTableModule,
	MatPaginatorModule,
	MatSortModule,
	BrowserAnimationsModule,
	MatProgressSpinnerModule,
	MatInputModule,
	ReactiveFormsModule
  ],
  providers: [AppService, mockBackendInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
