import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 13546,
  login: '@zl',
};

export const sampleWithPartialData: IUser = {
  id: 287,
  login: '{T@tFt-vS\\qts',
};

export const sampleWithFullData: IUser = {
  id: 6832,
  login: 'qF{5@3\\HPAcO',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
