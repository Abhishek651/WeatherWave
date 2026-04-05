import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';

export default function SunState({ astro }) {
    const { sunrise, sunset } = astro;
    return (
        <div className="w-[90%] md:w-2xl lg:w-5xl mx-auto rounded-2xl p-4 md:p-6 shadow-sm flex justify-around text-violet-900">
            <div className="flex flex-col items-center gap-1">
                <WbSunnyIcon className="!text-yellow-400" />
                <p className="text-xs tracking-widest font-bold">SUNRISE</p>
                <p className="text-base md:text-lg font-extrabold">{sunrise}</p>
            </div>
            <div className="flex items-center px-4">
                <div className="w-16 h-[2px] bg-violet-400"></div>
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-violet-400"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
                <NightlightIcon className="!text-indigo-400" />
                <p className="text-xs tracking-widest font-bold">SUNSET</p>
                <p className="text-base md:text-lg font-extrabold">{sunset}</p>
            </div>
        </div>
    )
}