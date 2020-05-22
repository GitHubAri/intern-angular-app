import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from './students'


@Injectable()

export class StudentService {

    private url: string = "/../assets/students.json";

  	constructor(private http: HttpClient) {} 

  	getStudents():Observable <IStudent[]>{  
    	return this.http.get<IStudent[]>(this.url);
  	}	
}
