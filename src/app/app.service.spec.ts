import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Activity } from './shared/models/activity.model';
import { Filters } from './shared/models/filters.model';
import { MOCK_PARAMS, MOCK_ACTIVITY } from './shared/mocks/activity.mock';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.get(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return activity object', () => {
    httpMock = TestBed.get(HttpTestingController);
    service.getActivity(MOCK_PARAMS).subscribe(activity => {
      expect(activity).toEqual(MOCK_ACTIVITY);
    });

    const req = httpMock.expectOne(
      'https://www.boredapi.com/api/activity?minprice=0&maxprice=10', 'Call to Activity API'
    );
    expect(req.request.method).toBe('GET');

    req.flush(MOCK_ACTIVITY);
  });
});
