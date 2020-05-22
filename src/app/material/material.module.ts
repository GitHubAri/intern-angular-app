import { NgModule } from '@angular/core';
import { MatButtonModule, 
		MatMenuModule, 
		MatIconModule, 
		MatToolbarModule,
		MatSortModule,

} from '@angular/material';

const MaterialComponents=[
	MatButtonModule,
	MatMenuModule,
	MatIconModule,
	MatToolbarModule,
	MatSortModule,
]

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ],
})
export class MaterialModule { }
