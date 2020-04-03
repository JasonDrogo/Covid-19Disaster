export interface ICountryCase {
  country: string;
  cases: { new: string, active: number, critical: number, recovered: number, total: number };
  deaths: { new: string, total: number };
  day: Date;
  time: Date;
}
