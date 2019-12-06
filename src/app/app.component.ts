import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, Subject } from 'rxjs';

import { AppService } from './app.service';
import { Activity } from './shared/models/activity.model';
import { Filters } from './shared/models/filters.model';
import { takeUntil } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'qantas-frontend-test';
  activities: BehaviorSubject<Array<Activity>> = new BehaviorSubject([]);
  onDestroy = new Subject();
  isLoading = false;

  constructor(private appService: AppService, private titleService: Title) { }

  ngOnInit() {
    // Setting page title
    this.titleService.setTitle(this.title);
  }

  ngOnDestroy() {
    this.onDestroy.next();
  }

  /**
   * This functions gets data from filter component
   */
  handleFilterChange(filters: Filters) {
    // Getting filters data and passing it to getActivity
    this.getActivity(filters);
  }

  /**
   * This function receives filters data and initiate API calls
   */
  getActivity(filters: Filters) {
    const requests = [];
    this.isLoading = true;

    for (let i = 0; i <= 4; i++) {
      // Create array of Observables
      requests.push(this.appService.getActivity(filters));
    }

    // Making API calls by subscribing to Observables
    forkJoin(requests)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        result => {
          this.isLoading = false;
          this.activities.next(
            result.filter(
              (activity: Activity) => activity.activity && !activity.error
            )
          );
        },
        error => {
          this.isLoading = false;
        }
      );
  }
}
