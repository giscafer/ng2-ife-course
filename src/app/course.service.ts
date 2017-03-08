import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Course} from './course/Course'
import * as DataJson from './data/dataJson';
let SERVER_URL = DataJson.XIAOWEI_COURSE_JSON;

@Injectable()
export class CourseService {

  constructor(private http: Http) {

  }

  query(type = 'XIAOWEI',cb): Promise<Course[]> {
    if (!cb) throw new Error("Bad response from server");
    type = type.toUpperCase();
    SERVER_URL = DataJson[type + '_COURSE_JSON'];
    return this.http.get(`${SERVER_URL}`)
      .toPromise()
      .then(response => {
         cb(response.json() as Course[])
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
