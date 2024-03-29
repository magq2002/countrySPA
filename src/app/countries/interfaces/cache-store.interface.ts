import { region } from "./region.type";
import { Country } from "./country";


export interface Cachestore {
  byCapital:    TermCountries;
  byCountries:  TermCountries;
  byRegion:     RegionCountries;
}

export interface TermCountries {
  term:       string;
  countries:  Country[];
}

export interface RegionCountries {
  region:    region;
  countries: Country[];
}
