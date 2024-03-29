import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: region[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  public selectedRegion?: region;

  constructor(private countriesService : CountriesService){}

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    this.countries = this.countriesService.cacheStore.byRegion.countries;
  }
  searchByRegion( region: region){

    this.isLoading = true;
    this.selectedRegion = region;

    this.countriesService.searchRegion(region).subscribe(countries=>{
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
