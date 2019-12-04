import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  activityTypes = [
    'relaxation',
    'recreation',
    'busywork',
    'music',
    'charity',
    'education'
  ];

  constructor() {}

  ngOnInit() {}
}
