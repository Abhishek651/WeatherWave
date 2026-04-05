// WeatherAPI returns air_quality["us-epa-index"] as 1–6
// 1 = Good, 2 = Moderate, 3 = Unhealthy for Sensitive, 4 = Unhealthy, 5 = Very Unhealthy, 6 = Hazardous
const AQI_LEVELS = {
  1: {
    label: 'Good',
    gradient: 'from-green-400 to-emerald-500',
    text: 'text-green-900',
    range: '0–50'
  },
  2: {
    label: 'Moderate',
    gradient: 'from-yellow-300 to-yellow-500',
    text: 'text-yellow-900',
    range: '51–100'
  },
  3: {
    label: 'Unhealthy for Sensitive Groups',
    gradient: 'from-orange-300 to-orange-500',
    text: 'text-orange-900',
    range: '101–150'
  },
  4: {
    label: 'Unhealthy',
    gradient: 'from-red-400 to-red-600',
    text: 'text-red-900',
    range: '151–200'
  },
  5: {
    label: 'Very Unhealthy',
    gradient: 'from-purple-400 to-purple-700',
    text: 'text-purple-100',
    range: '201–300'
  },
  6: {
    label: 'Hazardous',
    gradient: 'from-red-900 to-black',
    text: 'text-white',
    range: '301–500'
  }
};

export default function AirQuality({ airQuality }) {
    if (!airQuality) return null;

    const index = airQuality['us-epa-index'];
    // ?? AQI_LEVELS[1] — the ?? is the nullish coalescing operator. 
    // If AQI_LEVELS[index] is null or undefined (e.g. the API returns an unexpected index like 0 or 7), 
    // it falls back to level 1 (Good) instead of crashing.
    const { label, gradient, text, range } = AQI_LEVELS[index] ?? AQI_LEVELS[1];

    // round the main pollutants to 1 decimal
    const pollutants = [
        { name: 'PM2.5', value: airQuality.pm2_5?.toFixed(1),  unit: 'µg/m³' },
        { name: 'PM10',  value: airQuality.pm10?.toFixed(1),   unit: 'µg/m³' },
        { name: 'O₃',    value: airQuality.o3?.toFixed(1),     unit: 'µg/m³' },
        { name: 'NO₂',   value: airQuality.no2?.toFixed(1),    unit: 'µg/m³' },
    ];

    return (
        <div className={`w-[90%] md:w-2xl lg:w-5xl mx-auto rounded-2xl p-4 md:p-6 bg-linear-to-br ${gradient}`}>
            {/* header */}
            <div className="flex items-center justify-between mb-4">
                <p className={`text-xs font-bold tracking-widest ${text}`}>AIR QUALITY</p>
                <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white/30 ${text}`}>
                    {label}
                </span>
            </div>

            {/* AQI index + bar  |  score on the right */}
            <div className="flex items-center justify-between mb-4 gap-4">
                <div className="flex-1">
                    <p className={`text-4xl font-extrabold ${text}`}>AQI {index} <span className="text-base font-semibold opacity-70">/ 6</span></p>
                    {/* progress bar */}
                    <div className="mt-2 h-2 w-full rounded-full bg-white/30">
                        <div
                            className="h-2 rounded-full bg-white/80 transition-all duration-500"
                            style={{ width: `${(index / 6) * 100}%` }}
                        />
                    </div>
                </div>
                {/* US AQI score range */}
                <div className="text-right shrink-0">
                    <p className={`text-xs font-bold opacity-70 ${text}`}>US AQI SCORE</p>
                    <p className={`text-3xl font-extrabold ${text}`}>{range}</p>
                </div>
            </div>

            {/* pollutants grid */}
            <div className="grid grid-cols-4 gap-2 text-center">
                {pollutants.map(({ name, value, unit }) => (
                    <div key={name} className="bg-white/20 rounded-xl p-2">
                        <p className={`text-xs font-bold ${text}`}>{name}</p>
                        <p className={`text-sm font-extrabold ${text}`}>{value ?? '—'}</p>
                        <p className={`text-xs opacity-70 ${text}`}>{unit}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
