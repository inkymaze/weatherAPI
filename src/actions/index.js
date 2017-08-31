// axios replaces jquery to make ajax requests

import axios from 'axios';
const API_KEY ='4a8f106479b4e5b0d84e02af3821f775';
const ROOT_URL =
  `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  // this code is async although it doesnt look like it is
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:',request );
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
