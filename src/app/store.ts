import { createStore, applyMiddleware, AnyAction } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { galleryReducer } from '../reducers/gallery';
import { GetPhotosAction } from '../actions/photos';

export const store = createStore(galleryReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  GetPhotosAction
>;
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
