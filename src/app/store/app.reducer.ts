import { createReducer, on } from '@ngrx/store';
import { Status } from '../models/status.enum';
import { SetName, SetStatus, SetTel } from './app.actions';

export interface AppState {
  name: string;
  tel: string;
  status?: Status | null;
  orderId?: number | null;
}

export const initialState: AppState = {
  name: '',
  tel: '',
  status: null,
  orderId: null,
};

export const appReducer = createReducer(
  initialState,
  on(SetName, (state, { name }) => {
    return { ...state, name };
  }),
  on(SetTel, (state, { tel }) => ({ ...state, tel })),
  on(SetStatus, (state, { status }) => ({ ...state, status }))
);
