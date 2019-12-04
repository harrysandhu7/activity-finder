import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { minMaxValidator } from '../shared/validators/min-max.validator';
import { Filters } from '../shared/models/filters.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output() filterChanged: EventEmitter<Filters> = new EventEmitter<Filters>();
  activityTypes = [
    'relaxation',
    'recreation',
    'busywork',
    'music',
    'charity',
    'education'
  ];
  filterForm: FormGroup;
  onDestroy = new Subject();

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group(
      {
        minPrice: 0,
        maxPrice: 0,
        activityType: ''
      },
      { validators: minMaxValidator }
    );
  }

  ngOnInit() {
    this.filterForm.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        // In wireframe, submit button is not there
        // if that is the case, We can emit event to AppComponent from here
        // Uncomment below line to emit event
        // this.filterChanged.emit(this.filterForm.getRawValue());
      });
  }

  ngOnDestroy() {
    this.onDestroy.next();
  }

  handleSubmit() {
    const filters = this.filterForm.getRawValue() as Filters;
    this.filterChanged.emit(filters);
  }
}
