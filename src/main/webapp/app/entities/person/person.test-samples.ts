import { IPerson, NewPerson } from './person.model';

export const sampleWithRequiredData: IPerson = {
  id: 18976,
};

export const sampleWithPartialData: IPerson = {
  id: 6648,
  name: 'skinny rectangular fast',
};

export const sampleWithFullData: IPerson = {
  id: 5922,
  name: 'instead kosher nocturnal',
};

export const sampleWithNewData: NewPerson = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
