import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Filters } from './shared/models/filters.model';
import { Activity } from './shared/models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  API_ENDPOINT = 'https://www.boredapi.com/api/activity';

  constructor(private http: HttpClient) { }

  public getActivity(params: Filters): Observable<Activity> {
    const { activityType, minPrice, maxPrice } = params;
    let queryParams = new HttpParams();

    queryParams = queryParams.append('minprice', `${minPrice}`);
    queryParams = queryParams.append('maxprice', `${maxPrice}`);

    if (activityType) {
      queryParams = queryParams.append('type', activityType);
    }

    return this.http
      .get(this.API_ENDPOINT, { params: queryParams })
      .pipe(catchError(error => of(error)));
  }
}
