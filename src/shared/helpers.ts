import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';
import { ThunkDispatchType } from './AppTypes';
import { Hotel } from '../features/hotels/types';
import { hotels } from '../data/data';

export type ErrorInfo = {
    status: number;
    statusText: string;
    data: any; // tslint:disable-line:no-any
};

export function useReduxDispatch(): ThunkDispatchType {
  return useDispatch<ThunkDispatchType>();
}

export function formatApiError(axiosError: AxiosError): ErrorInfo {
  if (axiosError.response) {
      return {
      data: axiosError.response.data,
      status: axiosError.response.status,
      statusText: axiosError.response.statusText,
      };
  }

  return {
    data: '',
    status: 0,
    statusText: 'Unknown error',
  };
}

export function fetchData(): Hotel[] {
  return hotels;
}