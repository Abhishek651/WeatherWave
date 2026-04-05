import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function WeatherChart({forecastHourly}){
  
  if (!forecastHourly) return null;
  const chartData = forecastHourly.map(({ time, temp_c, chance_of_rain }) => ({
      // "2026-04-04 06:00" → "06:00" → "6 AM"
      time: new Date(`2000-01-01T${time.split(' ')[1]}`).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }),
      temp: temp_c,
      rain: chance_of_rain,
  }));

  return (
    <div className="w-[90%] md:w-2xl lg:w-5xl mx-auto bg-white rounded-2xl p-4 md:p-6 shadow-sm">

      <div>
        <p className="text-sm font-bold text-violet-900 mb-4 tracking-widest">
          Today — Temp & Rain Chance
        </p>
        <ResponsiveContainer className="chart-container" width="100%" height={160} style={{ outline: 'none' }}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0ebe0" />
            <XAxis dataKey="time" tick={{ fontSize: 9 }} />
            <YAxis tick={{ fontSize: 9 }} width={25} />
            <Tooltip />
            <Line type="natural" dataKey="temp" stroke="#a78bfa" strokeWidth={2.5} dot={{ r: 3 }} />
            <Line type="natural" dataKey="rain" stroke="#c4b5fd" strokeWidth={2} strokeDasharray="5 5" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* <div className="mt-4">
        <p className="text-violet-900 font-bold mb-3 text-sm md:text-base tracking-widest">Hourly</p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
          <div className="bg-violet-50 border border-violet-100 rounded-xl p-3 md:p-4 text-center">
            <p className="text-sm md:text-base font-semibold text-gray-700">Today</p>
            <p className="text-violet-500"><ThunderstormIcon fontSize="small" /></p>
            <p className="font-black text-base md:text-lg text-gray-800">34°</p>
            <p className="text-violet-400 text-xs md:text-sm font-semibold">78%</p>
          </div>
          <div className="bg-violet-50 border border-violet-100 rounded-xl p-3 md:p-4 text-center">
            <p className="text-sm md:text-base font-semibold text-gray-700">Sat</p>
            <p className="text-violet-500"><ThunderstormIcon fontSize="small" /></p>
            <p className="font-black text-base md:text-lg text-gray-800">33°</p>
            <p className="text-violet-400 text-xs md:text-sm font-semibold">88%</p>
          </div>
          <div className="bg-violet-50 border border-violet-100 rounded-xl p-3 md:p-4 text-center">
            <p className="text-sm md:text-base font-semibold text-gray-700">Sun</p>
            <p className="text-yellow-400"><WbSunnyIcon fontSize="small" /></p>
            <p className="font-black text-base md:text-lg text-gray-800">33°</p>
            <p className="text-violet-400 text-xs md:text-sm font-semibold">0%</p>
          </div>
          <div className="bg-violet-50 border border-violet-100 rounded-xl p-3 md:p-4 text-center">
            <p className="text-sm md:text-base font-semibold text-gray-700">Mon</p>
            <p className="text-yellow-400"><WbSunnyIcon fontSize="small" /></p>
            <p className="font-black text-base md:text-lg text-gray-800">34°</p>
            <p className="text-violet-400 text-xs md:text-sm font-semibold">0%</p>
          </div>
          <div className="bg-violet-50 border border-violet-100 rounded-xl p-3 md:p-4 text-center">
            <p className="text-sm md:text-base font-semibold text-gray-700">Tue</p>
            <p className="text-yellow-400"><WbSunnyIcon fontSize="small" /></p>
            <p className="font-black text-base md:text-lg text-gray-800">35°</p>
            <p className="text-violet-400 text-xs md:text-sm font-semibold">0%</p>
          </div>
        </div> */}
      {/* </div> */}

    </div>
  );
}
