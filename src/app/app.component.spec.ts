import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { ResultsComponent } from './results/results.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { MOCK_ACTIVITY, MOCK_PARAMS } from './shared/mocks/activity.mock';

describe('AppComponent', () => {
  const spyAppService: jasmine.SpyObj<AppService> = jasmine.createSpyObj('AppService', [
    'getActivity'
  ]);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      declarations: [AppComponent, FilterComponent, ResultsComponent],
      providers: [
        {
          provide: AppService,
          useValue: spyAppService
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'qantas-frontend-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('qantas-frontend-test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content h1').textContent).toContain(
      'Activity Finder'
    );
  });

  it('should call activity service 5 times to get activities', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    spyAppService.getActivity.and.returnValues(of(MOCK_ACTIVITY));
    expect(spyAppService.getActivity).not.toHaveBeenCalled();

    component.handleFilterChange(MOCK_PARAMS);
    tick(1000);
    expect(spyAppService.getActivity).toHaveBeenCalled();
    expect(spyAppService.getActivity).toHaveBeenCalledTimes(5);
  }));
});
