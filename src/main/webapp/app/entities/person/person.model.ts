import { ICompany } from 'app/entities/company/company.model';

export interface IPerson {
  id: number;
  name?: string | null;
  company?: ICompany | null;
}

export type NewPerson = Omit<IPerson, 'id'> & { id: null };
