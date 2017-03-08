import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentSelected: string = '';
  displayStyle: string;
  mobine: boolean;

  constructor(public router: Router) {
    this.mobine = window.innerWidth > 1000 ? false : true;
    this.displayStyle = !this.mobine ? 'inline-block' : 'none';
  }

  ngOnInit() {
    let path = this.router.url.substr(0);
    this.currentSelected = path;
  }

  selectMenu(type = 'xiaowei') {
    this.currentSelected = type;
  }

  phoneMenuClick($event) {
    if(!this.mobine) return;
    if ($event.target.nodeName === 'SPAN' && $event.target.id == "main-nav-toggle") {
      if (this.displayStyle === 'none') {
        this.displayStyle = 'inline-block'
      } else {
        this.displayStyle = 'none'
      }
    } else if ($event.target.nodeName === 'SPAN' || $event.target.nodeName === 'LI' && $event.target.id !== "main-nav-toggle") {
      this.displayStyle = 'none';
    } else {
      this.displayStyle = 'inline-block';
    }
  }
}
