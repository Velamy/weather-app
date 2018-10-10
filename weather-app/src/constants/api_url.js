const location = "Buenos Aires,ar";
const api_key ="a63e26a166319df7ac52ef3ca6a9353a";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
