import { Component, OnInit } from '@angular/core';
import { StudentService } from './../../student.service';
import { CsvService} from './../../csv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	public students = [];

  constructor(private studentService : StudentService,
  	private csvService: CsvService) { }

  ngOnInit() {
  	this.studentService.getStudents()
  		.subscribe(data => this.students = data);
  }

  download(){
    this.csvService.downloadFile(this.students, 'jsontocsv');
  }
}
