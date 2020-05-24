import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component'
import { HomeComponent } from './home/home.component';


const routes: Routes = [
	{ path: '', component:HomeComponent },
	{ path: 'student-list', component:ListComponent },
	{ path: 'movies' , component:DragDropComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [ListComponent, DragDropComponent];
