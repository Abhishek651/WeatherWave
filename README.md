# 🌊 WeatherWave

**Live Demo:** [https://weatherwave-ojrg.onrender.com/](https://weatherwave-ojrg.onrender.com/)

A responsive weather app built with React + Vite as a hands-on learning project. Search any city and get real-time weather, a multi-day forecast, sunrise/sunset times, and an hourly temperature chart — all wrapped in animated CSS weather icons.

---

## 🚀 Features

| Feature | Description |
|---|---|
| 🔍 City Search | Autocomplete powered by Geoapify — suggests cities as you type |
| 🌡️ Current Weather | Temperature, feels like, humidity, wind, UV index, visibility, cloud cover |
| 📅 Multi-day Forecast | 1–7 day forecast with avg temp, rain chance, and precipitation label |
| 🌅 Sunrise & Sunset | Visual timeline showing today's sun state |
| 📈 Hourly Chart | Line chart of today's temperature and rain chance (Recharts) |
| 🎨 Animated Weather Icons | Pure-CSS animated icons — sunny, partly cloudy, cloudy, rainy, thundery |
| 💀 Loading Skeletons | MUI Skeleton placeholders while data is fetching |
| 📱 Fully Responsive | Mobile → tablet → desktop layout via Tailwind CSS |

---

## 🧠 What I Learned

### React
- `useState` — managing city data, loading state, selected days, and current city coordinates
- `useEffect` — re-fetching weather data whenever the forecast day count changes
- Props — passing data down from `App` → `TempBox`, `Forecast`, `Chart`, `SunState`
- Conditional rendering — showing skeletons while loading, rendering components only when data exists
- Lifting state up — search bar calls `onSearch` prop to update state in the parent `App`

### API Integration
- `axios` for all HTTP requests
- **WeatherAPI.com** — `/forecast.json` endpoint for current weather, multi-day forecast, hourly data, alerts, and astro data
- **Geoapify Autocomplete API** — city name suggestions with lat/lon resolution
- Storing API keys securely in `.env` via `import.meta.env`
- Handling the case where a user types a city manually (no dropdown selection) — resolving lat/lon on search click


### Component Architecture
- Split UI into focused single-responsibility components: `Navbar`, `SearchBar`, `TempBox`, `SunState`, `Forecast`, `ForecastBox`, `Chart`, `WeatherIcon`, `Footer`
- Shared CSS classes across multiple components (cloud shape reused by cloudy, partly-cloudy, rainy, thundery)
- Separating concerns — `WeatherIcon` handles all icon logic, `getWeatherType()` maps API condition text to animation type


---

## ⚙️ Setup

```bash
# Install dependencies
npm install

# Add your API keys to .env
VITE_WEATHER_KEY=your_weatherapi_key
VITE_WEATHER_URL=https://api.weatherapi.com/v1
VITE_GEOAPIFY_KEY=your_geoapify_key
VITE_GEOAPIFY_AUTO_URL=https://api.geoapify.com/v1/geocode/autocomplete?text=

# Start dev server
npm run dev
```

---


### Tooling & Stack
- **React**
- **Tailwind CSS v4** — utility-first styling, responsive prefixes (`md:`, `lg:`)
- **MUI (Material UI v7)** — `Autocomplete`, `TextField`, `Skeleton`, icon components
- **Recharts** — `LineChart` with `ResponsiveContainer` for the hourly chart

`React 19` · `Vite` · `Tailwind CSS v4` · `MUI v7` · `Recharts` · `Axios`
---

*Made with ❤️ by Abhishek*
