import '../styles/weather-animations.css';

// Maps weatherapi.com condition text to one of 5 animation types.
// Order matters — thunder must come before rain, partly before cloudy.
function getWeatherType(text = '') {
  const t = text.toLowerCase();
  if (t.includes('thunder'))                                                    return 'thundery';
  if (t.includes('rain') || t.includes('drizzle') || t.includes('sleet'))      return 'rainy';
  if (t.includes('partly') || t.includes('partial'))                            return 'partly_cloudy';
  if (t.includes('cloud') || t.includes('overcast') || t.includes('fog') || t.includes('mist')) return 'cloudy';
  return 'sunny'; // fallback: clear, sunny, haze, etc.
}

// Renders a pure-CSS animated weather icon based on the condition text from the API.
// conditionText — e.g. "Partly cloudy", "Heavy rain", "Thundery outbreaks possible"
// className     — optional extra classes for sizing/positioning overrides
export default function WeatherIcon({ conditionText, className = '' }) {
  const type = getWeatherType(conditionText);

  // Dark cloud + flashing thunder glow + two rain streaks (fast)
  if (type === 'thundery') return (
    <div className={`wi-thundery ${className}`}>
      <div className="wi-thundery__cloud" /> {/* dark cloud with lightning box-shadow animation */}
      <div className="wi-thundery__rain" />  {/* two rain streaks, faster than regular rain */}
    </div>
  );

  // Grey cloud + two rain streaks fading in/out
  if (type === 'rainy') return (
    <div className={`wi-rainy ${className}`}>
      <div className="wi-rainy__cloud" /> {/* grey cloud */}
      <div className="wi-rainy__rain" />  {/* two animated rain streaks */}
    </div>
  );

  // Sun behind a floating cloud (cloud bobs up/down via translateUp)
  if (type === 'partly_cloudy') return (
    <div className={`wi-partly-cloudy ${className}`}>
      <div className="wi-partly-cloudy__sun" />   {/* yellow sun, z-index below cloud */}
      <div className="wi-partly-cloudy__cloud" /> {/* white cloud floating over sun */}
    </div>
  );

  // Single white cloud built from two ::before/::after pseudo-elements
  if (type === 'cloudy') return <div className={`wi-cloudy ${className}`} />;

  // Glowing yellow circle with a pulsing outer ring (fadeIn + scaleDown reversed)
  return <div className={`wi-sunny ${className}`} />;
}
