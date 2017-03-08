import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CourseService} from '../course.service';
import  {Course} from '../course/Course';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  currentStyles: {} = {
    display: 'block',
    color: 'red',
    width: '100%',
    textAlign: 'center',
    margin: '30px auto'
  };
  courses: Course[] = [];

  constructor(private courseService: CourseService,
              private router: Router) {
  }

  ngOnInit() {
    let type = this.router.url.substr(1);
    this.queryCourse(type)
  }

  queryCourse(type) {
    this.courseService.query(type, (res) => {
      console.log(res)
      this.courses = res;
    })
  }

}
