class WeatherAPI:
    def __init__(self):
        self.api_key = "fe046f0c8262c32bdec63151ab3cad42"
        self.base_url = "http://api.openweathermap.org/data/2.5/weather"

    def fetch_weather(self, city):
        import requests

        params = {
            'q': city,
            'appid': self.api_key,
            'units': 'metric'  # Use 'imperial' for Fahrenheit
        }
        response = requests.get(self.base_url, params=params)

        if response.status_code == 200:
            return response.json()
        else:
            return None