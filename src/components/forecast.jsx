import ForecastBox from './forecastBox';
import DaysSelect from './daysSelect';

export default function Forecast({forecastData,daysfunc,days}) {
    if (!forecastData) return null;
    
    //map returns list
    // storing objects in the list one by one
    //date as same , we get
    //icon , avgtemp, rain is filtered from the day list
    const forecastDays = forecastData.forecastday.map(({ date, day }) => ({
        date,
        icon: day.condition.icon,
        avgtemp_c: day.avgtemp_c,
        chance_of_rain: day.daily_chance_of_rain,
        totalprecip_mm: day.totalprecip_mm,
    }));    

 
    return (
        <div className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-6 shadow-md w-[90%] md:w-2xl lg:w-5xl mx-auto">
            <div className="flex items-center justify-between mb-4">
                <p className="text-violet-900 font-bold text-sm md:text-base tracking-widest">
                    {days}-DAY FORECAST (Avg Temp)
                </p>
                <DaysSelect handleDays={daysfunc} days={days} />
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">

                {/*forecastDays looks like: */}
                {/* [
                { date: "2025-07-18", icon: "//cdn...", avgtemp_c: 34, chance_of_rain: 78 },
                { date: "2025-07-19", icon: "//cdn...", avgtemp_c: 33, chance_of_rain: 88 },
                ...
                ]

                // .map() gives each object to ForecastBox as the `day` prop
                forecastDays.map((day, index) => <ForecastBox day={day} ... />)
                //                 ^^^                                  ^^^
                //           each object from array          passed as prop named "day" */}

                {forecastDays.map((day, index) => (
                    <ForecastBox key={index} day={day} isToday={index === 0} />
                ))}

            </div>
        </div>
    )
}
