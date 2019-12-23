import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
  public progress = 75;
  constructor() { }

  ngOnInit() {
  }

  initProgress() {
    const min = Math.ceil(10);
    const max = Math.floor(100);
    return this.progress = Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
