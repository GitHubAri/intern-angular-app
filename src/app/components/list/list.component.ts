import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';
import { StudentService } from './../../student.service';
import { IStudent } from './../../students';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	public students = [];

	std: IStudent[] = this.students;
    sortedData: IStudent[];

  constructor(private studentService : StudentService) { 
  	this.sortedData = this.std.slice();
  }

  ngOnInit() {
  	this.studentService.getStudents()
  		.subscribe(data => this.students = data);
  }

  

  sortData(sort: Sort) {
    const data = this.std.slice();
    if (!sort.active || sort.direction === '') {
      this.std = data;
      return;
    }

    this.std = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'first_name': return compare(a.first_name, b.first_name, isAsc);
        case 'last_name': return compare(a.last_name, b.last_name, isAsc);
        case 'grade': return compare(a.grade, b.grade, isAsc);
        case 'ph_no': return compare(a.ph_no, b.ph_no, isAsc);
        default: return 0;
      }
    });
  }
  
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  	return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }