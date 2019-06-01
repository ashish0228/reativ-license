import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.scss']
})
export class LeftSideNavComponent implements OnInit {
@Input() public routerlink = '';
@Input() public icon = '';
@Input() public label = '';
@Input() public isActive = false;
  constructor() { }

  ngOnInit() {
  }

}
