export interface ICompany {
  id: number;
  name?: string | null;
}

export type NewCompany = Omit<ICompany, 'id'> & { id: null };
