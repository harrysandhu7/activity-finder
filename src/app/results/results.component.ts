import { Component, Input } from '@angular/core';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { Activity } from '../shared/models/activity.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() activities: Activity[] = [];
  @Input() isLoading = false;

  constructor(public dialog: MatDialog) { }

  openModal(activity) {
    this.dialog.open(ModalComponent, {
      width: '500px',
      data: { activity }
    });
  }
}
