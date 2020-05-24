import { NgModule } from '@angular/core';
import { MatButtonModule, 
		MatMenuModule, 
		MatIconModule, 
		MatToolbarModule,
		MatSortModule,
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';


const MaterialComponents=[
	MatButtonModule,
	MatMenuModule,
	MatIconModule,
	MatToolbarModule,
	MatSortModule,
	DragDropModule,
]

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ],
})
export class MaterialModule { }
