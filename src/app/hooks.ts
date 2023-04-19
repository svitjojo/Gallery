import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppThunkDispatch, RootState } from './store';

export const useAppDispatch: () => AppThunkDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
