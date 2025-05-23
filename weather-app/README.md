# Weather Application

This is a simple weather application that fetches weather data from the OpenWeatherMap API. The application allows users to input a city name and receive current weather information.

## Project Structure

```
weather-app
├── src
│   ├── main.py          # Entry point of the application
│   ├── weather          # Module for weather-related functionalities
│   │   ├── __init__.py  # Initializes the weather module
│   │   └── api.py       # Handles communication with the OpenWeatherMap API
│   └── utils            # Module for utility functions
│       └── helpers.py   # Contains helper functions for data processing
├── requirements.txt     # Lists project dependencies
└── README.md            # Documentation for the project
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd weather-app
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Obtain an API key from OpenWeatherMap by signing up at [OpenWeatherMap](https://openweathermap.org/).

4. Update the `api.py` file with your API key.

## Usage

To run the application, execute the following command:
```
python src/main.py
```

Follow the prompts to enter a city name and receive the current weather information.

## OpenWeatherMap API

This application uses the OpenWeatherMap API to fetch weather data. For more information about the API, visit the [OpenWeatherMap API documentation](https://openweathermap.org/api).