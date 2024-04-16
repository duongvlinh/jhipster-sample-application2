import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '69f78a95-6370-41e4-84fe-90c06d9424fa',
};

export const sampleWithPartialData: IAuthority = {
  name: 'deb715c2-c284-4ae4-8c3d-30d0b3497f21',
};

export const sampleWithFullData: IAuthority = {
  name: '6765124b-56e7-4685-980e-132c0121634a',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
