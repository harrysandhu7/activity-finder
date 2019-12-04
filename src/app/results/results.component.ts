import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
const _ = require('lodash');

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() activities: any = [];
  @ViewChild('activityCard', { static: false }) activityCard: ElementRef;

  constructor() {}

  ngOnInit() {
    _.fill(this.activities, 'Loading activity...');
    if (this.activities && this.activities.length > 0) {
      for (let i = 0; i < this.activities.length - 1, i++; ) {
        this.activityCard.nativeElement.innerHTML = this.activities[i];
      }
    }
  }

  openModal(activity) {
    // TODO: its end of sprint this is someone else's problem
  }
}
