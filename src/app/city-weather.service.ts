import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityWeatherService {

  constructor(private http: HttpClient) { }

  getWeather(location) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=65d50f6280b6b805ccbb5bc7717a344b&query=' + location
    );
  }
}
