import FmdGoodTwoToneIcon from '@mui/icons-material/FmdGoodTwoTone';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SpeedIcon from '@mui/icons-material/Speed';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WeatherIcon from './WeatherIcon';

export default function TempBox({ location, current }) {
    const { name, region, country, localtime } = location;
    const { temp_c, temp_f, feelslike_c, humidity, wind_kph, wind_dir, pressure_mb, condition, uv, vis_km, cloud } = current
    const { text, icon } = condition;
    return (
        <div className="flex flex-col justify-center w-[90%] md:w-2xl lg:w-5xl min-h-64 md:h-80 lg:h-96 bg-linear-to-br from-[#4a1d96] to-[#7c3aed] rounded-3xl mx-auto text-white">
            <div className='flex flex-row items-center justify-between px-6 md:px-12 py-4 flex-1'>
                <div className='flex flex-col gap-1'>
                    <p className='text-sm md:text-base text-white/70'><FmdGoodTwoToneIcon fontSize='small' /> {name} {country}</p>
                    <h3 className='text-4xl md:text-6xl lg:text-7xl font-extrabold text-white'>{temp_c}°C</h3>
                    <p className='text-sm md:text-base text-white/70'>{text}</p>
                </div>
                <div className='text-5xl md:text-7xl'>
                    <WeatherIcon conditionText={text} />
                </div>
            </div>

            <hr className='mx-6 md:mx-16 bg-gray/10' />

            <div className='grid grid-cols-3 md:grid-cols-6 gap-3 px-6 md:px-12 py-4 text-center items-center flex-1'>
                <div className='flex flex-col gap-1'>
                    <p className='text-purple-heart-200 drop-shadow-[0_0_3px_rgba(228,175,250,0.3)]'><WaterDropIcon fontSize="small" /></p>
                    <p className='text-sm md:text-base font-black text-white'>{humidity}%</p>
                    <p className='text-xs md:text-sm text-purple-heart-200'>Humidity</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-purple-heart-200 drop-shadow-[0_0_3px_rgba(228,175,250,0.3)]'><AirIcon fontSize="small" /></p>
                    <p className='text-sm md:text-base font-black text-white'>{wind_kph} km/h {wind_dir}</p>
                    <p className='text-xs md:text-sm text-purple-heart-200'>Wind</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-purple-heart-200 drop-shadow-[0_0_3px_rgba(228,175,250,0.3)]'><ThermostatIcon fontSize="small" /></p>
                    <p className='text-sm md:text-base font-black text-white'>{feelslike_c}°C</p>
                    <p className='text-xs md:text-sm text-purple-heart-200'>Feels Like</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-purple-heart-200 drop-shadow-[0_0_3px_rgba(228,175,250,0.3)]'><VisibilityIcon fontSize="small" /></p>
                    <p className='text-sm md:text-base font-black text-white'>{vis_km} km</p>
                    <p className='text-xs md:text-sm text-purple-heart-200'>Visibility</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-purple-heart-200 drop-shadow-[0_0_3px_rgba(228,175,250,0.3)]'><SpeedIcon fontSize="small" /></p>
                    <p className='text-sm md:text-base font-black text-white'>{cloud}%</p>
                    <p className='text-xs md:text-sm text-purple-heart-200'>Cloud Cover</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-purple-heart-200 drop-shadow-[0_0_3px_rgba(228,175,250,0.3)]'><WbSunnyIcon fontSize="small" /></p>
                    <p className='text-sm md:text-base font-black text-white'>{uv}</p>
                    <p className='text-xs md:text-sm text-purple-heart-200'>UV Index</p>
                </div>
            </div>
        </div>
    )
}
