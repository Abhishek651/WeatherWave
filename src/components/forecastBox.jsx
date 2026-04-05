export default function ForecastBox({ day, isToday }) {
    const { date, icon, avgtemp_c, chance_of_rain, totalprecip_mm } = day;
    const label = isToday ? 'Today' : new Date(date).toLocaleDateString('en-US', { weekday: 'short' });

    function getRainLabel(mm) {
     
        // Handle invalid values
        if (mm == null || isNaN(mm) || mm < 0) {
            return { text: 'N/A', color: 'text-gray-400' };
        }
        // Normalize tiny values (avoid noise like 0.01)
        if (mm < 0.1) {
            return { text: '🌤 Dry', color: 'text-gray-400' };
        }
        if (mm < 2) {
            return { text: '🌦 Light rain', color: 'text-purple-400' };
        }
        if (mm < 10) {
            return { text: '🌧 Moderate rain', color: 'text-purple-500' };
        }
        if (mm < 50) {
            return { text: '🌧 Heavy rain', color: 'text-purple-600' };
        }
        return { text: '⛈ Very heavy rain' };
    }


    const rain = getRainLabel(totalprecip_mm);

    return (
        <div className="bg-violet-50 border border-violet-100 rounded-xl p-3 md:p-4 text-center hover:scale-105 transition-transform cursor-pointer">
            <p className="text-sm md:text-base font-semibold text-violet-900">{label}</p>
            <img src={`https:${icon}`} alt="weather icon" className="mx-auto w-8 h-8" />
            <p className="font-bold text-base md:text-lg text-gray-800">{avgtemp_c}°</p>
            <p className="text-violet-400 text-xs md:text-sm font-semibold">{chance_of_rain}%</p>
            <p className={`text-sm font-semibold ${rain.color}`}>{rain.text}</p>
        </div>
    );
};
