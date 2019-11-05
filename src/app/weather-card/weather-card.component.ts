import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CityWeatherService } from "../city-weather.service";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  constructor(
    private formBuilder: FormBuilder,
    private CityWeatherService: CityWeatherService
    ) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  sendToAPIXU(formValues) {
    console.log(formValues);
    this.CityWeatherService
      .getWeather(formValues.location)
      .subscribe(data => this.weatherData = data)
        console.log(this.weatherData);
  }
}
