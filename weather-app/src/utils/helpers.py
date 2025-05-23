def format_weather_data(data):
    if 'main' in data and 'weather' in data:
        temperature = data['main']['temp']
        weather_description = data['weather'][0]['description']
        city_name = data['name']
        formatted_data = f"Weather in {city_name}: {temperature}°C, {weather_description.capitalize()}"
        return formatted_data
    return "Weather data not available."