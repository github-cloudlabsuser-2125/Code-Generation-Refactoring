import requests
from weather.api import WeatherAPI

def main():
    print("Welcome to the Weather Application!")
    city = input("Enter the city name: ")
    
    weather_api = WeatherAPI()
    weather_data = weather_api.fetch_weather(city)
    
    if weather_data:
        print(f"Weather in {city}:")
        print(f"Temperature: {weather_data['main']['temp']}°C")
        print(f"Weather: {weather_data['weather'][0]['description']}")
    else:
        print("Could not retrieve weather data. Please check the city name.")

if __name__ == "__main__":
    main()