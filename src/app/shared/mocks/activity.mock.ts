import { Activity } from '../models/activity.model';
import { Filters } from '../models/filters.model';

export const MOCK_ACTIVITY: Activity = {
  activity: 'Do yoga',
  accessibility: 0.9,
  key: '4688012',
  link: '',
  participants: 1,
  price: 0,
  type: 'recreational',
};
export const MOCK_PARAMS: Filters = {
  minPrice: 0,
  maxPrice: 10,
  activityType: '',
};
