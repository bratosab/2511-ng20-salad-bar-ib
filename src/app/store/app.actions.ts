import { createAction, props } from '@ngrx/store';
import { Status } from '../models/status.enum';

export const SetName = createAction('app/set-name', props<{ name: string }>());
export const SetTel = createAction('app/set-tel', props<{ tel: string }>());
export const SetStatus = createAction(
  'app/set-status',
  props<{ status: Status  }>()
);