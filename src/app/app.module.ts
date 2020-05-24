import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { ListComponent } from './components/list/list.component';
import { StudentService } from './student.service';
import { CsvService } from './csv.service';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    DragDropComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    BrowserModule,
  ],
  providers: [StudentService, CsvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
