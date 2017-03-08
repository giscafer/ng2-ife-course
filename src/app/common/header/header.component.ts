import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentSelected: string = '';

  constructor(public router: Router) {

  }

  ngOnInit() {
    let path = this.router.url.substr(0);
    this.currentSelected = path;
  }

  selectMenu(type = 'xiaowei') {
    this.currentSelected = type;
  }
}
