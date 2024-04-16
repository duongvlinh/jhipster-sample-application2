import { ICompany, NewCompany } from './company.model';

export const sampleWithRequiredData: ICompany = {
  id: 20415,
};

export const sampleWithPartialData: ICompany = {
  id: 17752,
  name: 'cranky whispering ringed',
};

export const sampleWithFullData: ICompany = {
  id: 920,
  name: 'how astride linen',
};

export const sampleWithNewData: NewCompany = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
